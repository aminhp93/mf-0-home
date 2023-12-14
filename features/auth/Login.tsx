// Import libraries
import Button from "@mui/material/Button";

// Import local files
import useAuth from "./useAuth";

const Login = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    const dataRequest = {
      username: "admin",
      password: "admin",
    };

    login(dataRequest);
  };

  return (
    <div>
      <Button onClick={handleLogin}>Login</Button>
    </div>
  );
};

export default Login;
