import dynamic from "next/dynamic";

import RemoteItems from "@/components/RemoteItems";

const Common = dynamic(
  () =>
    import(
      // @ts-ignore
      "common/title"
    ),
  {
    ssr: false,
  }
) as any;

const Page = () => {
  return (
    <div>
      <div>Home</div>
      <Common />
      <RemoteItems />
    </div>
  );
};

export default Page;
