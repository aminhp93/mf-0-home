import dynamic from "next/dynamic";
import SignIn from "@/features/auth/SignIn";

const SignInPage = () => {
  return <SignIn />;
};

export default dynamic(() => Promise.resolve(SignInPage), {
  ssr: false,
});
