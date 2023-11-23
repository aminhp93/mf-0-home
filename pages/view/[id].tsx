import dynamic from "next/dynamic";
import LegacyLayout from "@/features/layout/LegacyLayout";
import View from "@/features/view/View";
// @ts-ignore
import("items/listItems");

const ViewPage = () => {
  return <View />;
};

ViewPage.getLayout = (page: React.ReactNode) => (
  <LegacyLayout>{page}</LegacyLayout>
);

export default dynamic(() => Promise.resolve(ViewPage), {
  ssr: false,
});
