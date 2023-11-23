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
import LegacyLayout from "@/features/layout/LegacyLayout";
import Link from "next/link";

const IndexPage = () => {
  console.log(capitalizeText("hello world"));
  const router = useRouter();
  console.log(router);

  const controllers = useDataStore((store) => store.controllers);
  console.log({ controllers });
  const systems = useDataStore((store) => store.systems);
  console.log({ systems });
  return (
    <div>
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/view/123">view id</Link>
        </li>
        <li>
          <Link href="/edit/123">edit id</Link>
        </li>
      </ul>

      {/* <RemoteCommon />
      <RemoteItems />
      <RemoteProperty /> */}

      {/* <LegacyLayout /> */}
    </div>
  );
};

export default dynamic(() => Promise.resolve(IndexPage), {
  ssr: false,
});
