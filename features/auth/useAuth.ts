// import authConfig from "@/@/configs/auth";
// import AuthService from "@/views/auth/Auth.services";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export type User = string | null;

const useAuth = () => {
  const router = useRouter();

  const [authUser, setAuthUser] = useState<User>(
    localStorage.getItem("authUser") || ""
  );

  const [isAuthentication, setIsAuthentication] = useState<boolean>(false);

  const signOut = async () => {
    // localStorage.removeItem("authUser");
    // localStorage.removeItem(authConfig.storageTokenKeyName);
    // setAuthUser("");
    // const res = await AuthService.signOut();
    // setAuthUser(res);

    // remove token variable in local storage
    localStorage.removeItem("authUser");
  };

  const signIn = async (username?: string, password?: string) => {
    // setAuthUser(username);
    // localStorage.setItem("authUser", username.split("@")[0]);
    // const dataRequest = {
    //   username,
    //   password,
    // };
    // try {
    //   const res = await AuthService.signIn(dataRequest);
    //   const accessToken = res.access_token;
    //   localStorage.setItem(authConfig.storageTokenKeyName, accessToken);
    //   setAuthUser(accessToken);
    //   setIsAuthentication(true);
    //   router.push("/dashboard");
    // } catch (error) {
    //   console.error("error", error);
    // }

    // set token variable in local storage is true
    localStorage.setItem("authUser", "true");

    // redirect to home page use next router
    router.push("/");
  };

  useEffect(() => {
    // const init = async () => {
    //   const res = await AuthService.getMe();
    //   setAuthUser(res.data);
    // };
    // init();
  }, []);

  return {
    signIn,
    signOut,
    authUser,
    isAuthentication,
  };
};

export default useAuth;
