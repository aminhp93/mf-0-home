import dynamic from "next/dynamic";
import Login from "@/features/auth/Login";

const LoginPage = () => {
  return <Login />;
};

export default dynamic(() => Promise.resolve(LoginPage), {
  ssr: false,
});
