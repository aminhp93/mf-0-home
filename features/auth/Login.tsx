// Import libraries
import Button from "@mui/material/Button";

// Import local files
import useAuth from "./useAuth";

const Login = () => {
  const { login } = useAuth();

  const handleLogin = () => {
    const dataRequest = {
      username: btoa(encodeURIComponent("admin")),
      password: btoa(encodeURIComponent("p20-admin")),
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
