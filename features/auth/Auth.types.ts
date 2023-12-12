import { z } from "zod";

export type AuthValuesType = {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
  setLoading: (loading: boolean) => void;
  login: (data: LoginRequestData) => Promise<void>;
  logout: () => void;
};

export type ErrCallbackType = () => void;

const LoginRequestDataSchema = z.object({
  username: z.string(),
  password: z.string(),
});

const LoginResponseDataSchema = z.object({
  // access_token: z.string(),
  // token_type: z.string(),
  status: z.string(),
});

const LogoutResponseDataSchema = z.object({
  message: z.string(),
});

const UserSchema = z.object({
  id: z.string(),
  userName: z.string(),
  name: z.string(),
  email: z.string(),
  telephone: z.string(),
  provider: z.string(),
  startPage: z
    .object({
      controllerId: z.string(),
      viewId: z.string(),
    })
    .optional(),
  mobileStartPage: z
    .object({
      controllerId: z.string(),
      viewId: z.string(),
    })
    .optional(),
  access: z.record(z.string(), z.number()),
  accessRights: z.record(z.string(), z.array(z.string())),
  inactivityTimeout: z.number(),
  tokenSet: z
    .object({
      accessToken: z.string(),
      idToken: z.string(),
      expiresIn: z.number().optional(),
    })
    .optional(),
  legacy: z.object({
    miscSettings: z.object({
      logo: z.string(),
      splashBg: z.string(),
    }),
    loginSettings: z.object({
      stylesheet: z.array(
        z.object({
          color: z.string(),
          name: z.string(),
        })
      ),
      startPage: z.object({
        chainId: z.string(),
        uuid: z.string(),
      }),
      mobileStartPage: z.object({
        chainId: z.string(),
        uuid: z.string(),
      }),
      autoAckAlarms: z.boolean(),
      alarmClasses: z.array(z.string()),
      serverName: z.string(),
      showUnackedAlarms: z.boolean(),
      showSystemAlarms: z.boolean(),
      networkList: z.array(z.unknown()),
      features: z.unknown(),
      masterComs: z.object({
        name: z.string(),
        url: z.string(),
        chainId: z.string(),
        active: z.number(),
      }),
    }),
  }),
});

export type LoginRequestData = z.infer<typeof LoginRequestDataSchema>;
export type LoginResponseData = z.infer<typeof LoginResponseDataSchema>;
export type LogoutResponseData = z.infer<typeof LogoutResponseDataSchema>;
export type User = z.infer<typeof UserSchema>;
