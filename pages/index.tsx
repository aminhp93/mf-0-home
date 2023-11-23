import dynamic from "next/dynamic";
import { capitalizeText } from "mf-packages";
// @ts-ignore
import RemoteItems from "items/index";
// @ts-ignore
import RemoteCommon from "common/index";
// @ts-ignore
import RemoteProperty from "property/index";
import { useRouter } from "next/router";
import { useDataStore } from "@/features/app-builder/SystemStore";

const IndexPage = () => {
  console.log(capitalizeText("hello world"));
  const router = useRouter();
  console.log(router);

  const controllers = useDataStore((store) => store.controllers);
  console.log({ controllers });
  return (
    <div>
      <div
        onClick={() => {
          // go to view page
          router.push("/view");
        }}
      >
        Home
      </div>

      <RemoteCommon />
      <RemoteItems />
      <RemoteProperty />
    </div>
  );
};

export default dynamic(() => Promise.resolve(IndexPage), {
  ssr: false,
});
