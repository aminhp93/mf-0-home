// Import local files
import axiosInstance, { axiosDefault } from "@/@core/services";
import {
  LoginRequestData,
  LoginResponseData,
  LogoutResponseData,
  User,
} from "./Auth.types";

const AuthUrl = {
  login: `/auth/login`,
  logout: `/auth/logout`,
  me: `/user`,
};

export { AuthUrl };

const AuthService = {
  // Plain request, no token
  login: (
    data: LoginRequestData
  ): Promise<{
    data: LoginResponseData;
  }> => {
    return axiosDefault({
      method: "POST",
      url: AuthUrl.login,
      data,
    });
  },
  logout: (): Promise<{
    data: LogoutResponseData;
  }> => {
    return axiosDefault({
      method: "POST",
      url: AuthUrl.logout,
    });
  },
  me: (): Promise<{
    user: User;
  }> => {
    return axiosInstance({
      method: "GET",
      url: AuthUrl.me,
    });
  },
};

export default AuthService;
