import { capitalizeText } from "mf-packages";
import NoSSR from "react-no-ssr";
// @ts-ignore
import RemoteItems from "items/index";
// @ts-ignore
import RemoteCommon from "common/index";
// @ts-ignore
import RemoteProperty from "property/index";

const Page = () => {
  console.log(capitalizeText("hello world"));
  return (
    <div>
      <div>Home</div>
      <RemoteCommon />
      <RemoteItems />
      <RemoteProperty />
    </div>
  );
};

const NoSSRPage = () => (
  <NoSSR>
    <Page />
  </NoSSR>
);

export default NoSSRPage;
