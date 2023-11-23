// Import libraries
import Button from "@mui/material/Button";

// Import local files
import useAuth from "./useAuth";

const SignInPage = () => {
  const { login } = useAuth();

  const handleSignIn = () => {
    login();
  };

  return (
    <div>
      <Button onClick={handleSignIn}>Sign In</Button>
    </div>
  );
};

export default SignInPage;
