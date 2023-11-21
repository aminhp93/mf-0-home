import dynamic from "next/dynamic";

// import RemoteItems from "@/components/RemoteItems";
const RemoteItems = dynamic(
  () =>
    import(
      // @ts-ignore
      "items/index"
    ),
  {
    ssr: false,
  }
) as any;

const RemoteCommon = dynamic(
  () =>
    import(
      // @ts-ignore
      "common/index"
    ),
  {
    ssr: false,
  }
) as any;

const RemoteProperty = dynamic(
  () =>
    import(
      // @ts-ignore
      "property/index"
    ),
  {
    ssr: false,
  }
) as any;

const Page = () => {
  return (
    <div>
      <div>Home</div>
      <RemoteCommon />
      <RemoteItems />
      <RemoteProperty />
    </div>
  );
};

export default Page;
