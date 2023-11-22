// Import libraries
import Button from "@mui/material/Button";

// Import local files
import useAuth from "./useAuth";

const SignInPage = () => {
  const { signIn } = useAuth();

  const handleSignIn = () => {
    signIn();
  };

  return (
    <div>
      <Button onClick={handleSignIn}>Sign In</Button>
    </div>
  );
};

export default SignInPage;
