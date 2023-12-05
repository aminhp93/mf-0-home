import dynamic from "next/dynamic";
// import SignIn from "@/features/auth/SignIn";
import AboutComponent from "@/components/about-component";

const SignInPage = () => {
  return (
    <>
      {/* <SignIn />; */}
      <AboutComponent />
    </>
  );
};

export default dynamic(() => Promise.resolve(SignInPage), {
  ssr: false,
});
