import dynamic from "next/dynamic";
import("@/components/RemoteItems");

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

const RemoteItems = dynamic(() => import("@/components/RemoteItems") as any, {
  ssr: false,
});

const Page = () => {
  return (
    <div>
      <div>Home</div>
      {/* <Common /> */}
      <RemoteItems />
    </div>
  );
};

export default Page;
