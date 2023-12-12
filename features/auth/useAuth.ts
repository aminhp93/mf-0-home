// Import libraries
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

// Import local files
import {
  STORAGE_TOKEN_KEY_NAME,
  USER_DATA_KEY_NAME,
  DEFAULT_PROVIDER,
} from "./Auth.constants";
import { LoginRequestData, User, ErrCallbackType } from "./Auth.types";
import AuthService from "./Auth.services";

const useAuth = () => {
  // ** States
  const [user, setUser] = useState<User | null>(DEFAULT_PROVIDER.user);
  const [loading, setLoading] = useState<boolean>(DEFAULT_PROVIDER.loading);

  // ** Hooks
  const router = useRouter();

  useEffect(() => {
    const initAuth = async (): Promise<void> => {
      const storedToken = window.localStorage.getItem(STORAGE_TOKEN_KEY_NAME)!;
      if (storedToken) {
        setLoading(true);
        try {
          // const res = await AuthService.me();
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const res: any = {
            user: {
              id: 1,
              username: "John Doe",
            },
          };
          setLoading(false);
          setUser({ ...res.user });
          window.localStorage.setItem(
            USER_DATA_KEY_NAME,
            JSON.stringify(res.user)
          );
          console.log("Logged in successfully");
        } catch (e) {
          setLoading(false);
          // localStorage.removeItem('userData')
          // localStorage.removeItem('refreshToken')
          // localStorage.removeItem('accessToken')
          setUser(null);
          console.log("Login failed");
        }
      } else {
        // redirect to login page
        router.push("/login");

        setLoading(false);
      }
    };

    initAuth();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleLogin = async (
    params: LoginRequestData,
    errorCallback?: ErrCallbackType
  ) => {
    try {
      const res = await AuthService.login(params);
      window.localStorage.setItem(STORAGE_TOKEN_KEY_NAME, res.data.status);

      // const meRes = await AuthService.me();

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const meRes: any = {
        user: {
          id: 1,
          username: "John Doe",
        },
      };

      setUser({ ...meRes.user });

      window.localStorage.setItem(
        USER_DATA_KEY_NAME,
        JSON.stringify(meRes.user)
      );

      const returnUrl = router.query.returnUrl;
      const redirectURL = returnUrl && returnUrl !== "/" ? returnUrl : "/";

      router.replace(redirectURL as string);
    } catch (err) {
      if (errorCallback) errorCallback();
    }
  };

  const handleLogout = () => {
    setUser(null);
    window.localStorage.removeItem(USER_DATA_KEY_NAME);
    window.localStorage.removeItem(STORAGE_TOKEN_KEY_NAME);
    router.push("/login");
  };

  return {
    user,
    loading,
    setUser,
    setLoading,
    login: handleLogin,
    logout: handleLogout,
  };
};

export default useAuth;
