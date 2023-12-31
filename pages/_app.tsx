import "@/styles/globals.css";
import "react-grid-layout/css/styles.css";

// Import packages
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { ReactElement, ReactNode } from "react";
import type { NextPage } from "next";
import createCache from "@emotion/cache";
import type { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import {
  ThemeComponent,
  SettingsConsumer,
  SettingsProvider,
} from "mf-packages";

// Import local components
import { AuthProvider } from "@/features/auth/AuthContext";

const AuthGuard = dynamic(() => import("@/features/auth/AuthGuard"), {
  ssr: false,
});

const GuestGuard = dynamic(() => import("@/features/auth/GuestGuard"), {
  ssr: false,
});

export const createEmotionCache = () => {
  return createCache({ key: "css" });
};

const clientSideEmotionCache = createEmotionCache();

export type NextPageWithLayout<P = object, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
  authGuard?: boolean;
  guestGuard?: boolean;
  setConfig?: () => void;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type SettingsProps = any;

type Props = AppProps & {
  // Component: NextPageWithLayout;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  Component: any;
  getLayout?: (page: ReactElement) => ReactNode;
  authGuard?: boolean;
  guestGuard?: boolean;
  emotionCache: EmotionCache;
  setConfig?: () => void;
};

const App = (props: Props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // Variables
  const setConfig = Component.setConfig ?? undefined;
  const authGuard = Component.authGuard ?? true;
  const guestGuard = Component.guestGuard ?? false;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <CacheProvider value={emotionCache}>
      <AuthProvider>
        <SettingsProvider {...(setConfig ? { pageSettings: setConfig() } : {})}>
          <SettingsConsumer>
            {({ settings }: SettingsProps) => {
              return (
                <ThemeComponent settings={settings}>
                  <Guard authGuard={authGuard} guestGuard={guestGuard}>
                    {getLayout(<Component {...pageProps} />)}
                  </Guard>
                </ThemeComponent>
              );
            }}
          </SettingsConsumer>
        </SettingsProvider>
      </AuthProvider>
    </CacheProvider>
  );
};

export default App;

type GuardProps = {
  children: ReactNode;
  authGuard?: boolean;
  guestGuard?: boolean;
};

const Guard = ({ children, authGuard, guestGuard }: GuardProps) => {
  if (guestGuard) {
    return <GuestGuard fallback={<div>Loading</div>}>{children}</GuestGuard>;
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>;
  } else {
    return <AuthGuard fallback={<div>Loading</div>}>{children}</AuthGuard>;
  }
};
