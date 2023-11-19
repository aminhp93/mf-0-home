import dynamic from "next/dynamic";

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
const Items = dynamic(
  () =>
    import(
      // @ts-ignore
      "items/list"
    ),
  {
    ssr: false,
  }
) as any;

const Page = () => {
  // console.log("hello world");

  return (
    <div>
      <div>Home</div>
      <Common />
      <Items />
    </div>
  );
};

export default Page;
