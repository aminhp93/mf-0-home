import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AuthProvider } from "@/features/auth/AuthContext";
import AuthGuard from "@/features/auth/AuthGuard";
import GuestGuard from "@/features/auth/GuestGuard";

const Guard = ({ children, authGuard, guestGuard }: any) => {
  if (guestGuard) {
    return <GuestGuard fallback={<div>Loading</div>}>{children}</GuestGuard>;
  } else if (!guestGuard && !authGuard) {
    return <>{children}</>;
  } else {
    return <AuthGuard fallback={<div>Loading</div>}>{children}</AuthGuard>;
  }
};

export default function App({ Component, pageProps }: any) {
  // Fetch data from external API
  // controller/system/subsystem
  const authGuard = Component.authGuard ?? false;

  const guestGuard = Component.guestGuard ?? false;

  // const getLayout =
  //   Component.getLayout ??
  //   ((page: any) => {
  //     page;
  //   });

  return (
    <AuthProvider>
      <Guard authGuard={authGuard} guestGuard={guestGuard}>
        {/* {getLayout(<Component {...pageProps} />)} */}
        <Component {...pageProps} />
      </Guard>
    </AuthProvider>
  );
}
