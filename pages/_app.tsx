import "@/styles/globals.css";
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

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // Fetch data from external API
  // controller/system/subsystem
  const authGuard = Component.authGuard ?? false;

  const guestGuard = Component.guestGuard ?? false;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <AuthProvider>
      <Guard authGuard={authGuard} guestGuard={guestGuard}>
        <Suspense fallback={<div>loadng 1</div>}>
          {getLayout(<Component {...pageProps} />)}
        </Suspense>
      </Guard>
    </AuthProvider>
  );
}
