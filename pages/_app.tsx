import "@/styles/globals.css";
import "react-grid-layout/css/styles.css";

import type { AppProps } from "next/app";
import { AuthProvider } from "@/features/auth/AuthContext";
import AuthGuard from "@/features/auth/AuthGuard";
import GuestGuard from "@/features/auth/GuestGuard";
import {
  ReactElement,
  ReactNode,
  createContext,
  useEffect,
  Suspense,
} from "react";
import type { NextPage } from "next";

const Guard = ({ children, authGuard, guestGuard }: any) => {
  if (guestGuard) {
    return <GuestGuard fallback={<div>Loading</div>}>{children}</GuestGuard>;
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>;
  } else {
    return <AuthGuard fallback={<div>Loading</div>}>{children}</AuthGuard>;
  }
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
  authGuard?: boolean;
  guestGuard?: boolean;
};

import createCache from "@emotion/cache";

export const createEmotionCache = () => {
  return createCache({ key: "css" });
};

const clientSideEmotionCache = createEmotionCache();

// ** Emotion Imports
import type { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

// ** Component Imports
// import ThemeComponent from "@/@core/theme/ThemeComponent";

import {
  ThemeComponent,
  SettingsConsumer,
  SettingsProvider,
} from "mf-packages";

// ** Contexts
// import {
//   SettingsConsumer,
//   SettingsProvider,
// } from "@/@core/context/settingsContext";

// ** Configure JSS & ClassName
const App = (props: any) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  // Variables

  const setConfig = Component.setConfig ?? undefined;

  const authGuard = Component.authGuard ?? false;

  const guestGuard = Component.guestGuard ?? false;

  const getLayout = Component.getLayout ?? ((page: any) => page);

  return (
    <CacheProvider value={emotionCache}>
      <AuthProvider>
        <SettingsProvider {...(setConfig ? { pageSettings: setConfig() } : {})}>
          <SettingsConsumer>
            {({ settings }: any) => {
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
