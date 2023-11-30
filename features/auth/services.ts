import axios from "axios";
import { LoginParams, UserDataType } from "./types";
import axiosInstance from "@/@core/services";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const AuthUrl = {
  login: `${baseUrl}/auth/signin`,
  me: `${baseUrl}/user`,
  verify: `${baseUrl}/user/password/verify`,
  refreshToken: `${baseUrl}/auth/refresh_token`,
};

interface LoginResponse {
  tokenType: string;
  accessToken: string;
  refreshToken: string;
}

const AuthService = {
  // Plain request, no token
  login: (
    data: LoginParams
  ): Promise<{
    data: LoginResponse;
  }> => {
    return axios({
      method: "POST",
      url: AuthUrl.login,
      data,
    });
  },
  getRefreshToken: (data: { refreshToken: string }) => {
    return axios({
      method: "POST",
      url: AuthUrl.refreshToken,
      data,
    });
  },
  me: (): Promise<{
    user: UserDataType;
  }> => {
    return axiosInstance({
      method: "GET",
      url: AuthUrl.me,
    });
  },
  verify: (data: {
    password: string;
  }): Promise<{
    Ok: boolean;
  }> => {
    return axiosInstance({
      method: "POST",
      url: AuthUrl.verify,
      data,
    });
  },
};

export default AuthService;
