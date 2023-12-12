// Import libraries
import { createContext, ReactNode } from "react";

// Import local files
import { DEFAULT_PROVIDER } from "./Auth.constants";
import useAuth from "./useAuth";

const AuthContext = createContext(DEFAULT_PROVIDER);

type Props = {
  children: ReactNode;
};

const AuthProvider = ({ children }: Props) => {
  const auth = useAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
