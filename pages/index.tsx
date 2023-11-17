import dynamic from "next/dynamic";

const BMS = dynamic(
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
  // console.log("hello world");

  return (
    <div>
      host <BMS />
    </div>
  );
};

export default Page;
