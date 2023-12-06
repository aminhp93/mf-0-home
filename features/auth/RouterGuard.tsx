// Import library
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

// Import local files
import useAuth from "./useAuth";

type Props = {
  children: React.ReactNode;
};

const RouterGuard = ({ children }: Props) => {
  const { authUser } = useAuth();
  const router = useRouter();

  console.log({ authUser });
  if (!authUser) {
    router.push("/signIn");
  }

  return <>{children}</>;
};

export default dynamic(() => Promise.resolve(RouterGuard), {
  ssr: false,
});
