import dynamic from "next/dynamic";
import { capitalizeText } from "mf-packages";
// @ts-ignore
import RemoteItems from "items/index";
// @ts-ignore
import RemoteCommon from "common/index";
// @ts-ignore
import RemoteProperty from "property/index";
import { useRouter } from "next/router";

const IndexPage = () => {
  console.log(capitalizeText("hello world"));
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <div>Home</div>

      <RemoteCommon />
      <RemoteItems />
      <RemoteProperty />
    </div>
  );
};

export default dynamic(() => Promise.resolve(IndexPage), {
  ssr: false,
});
