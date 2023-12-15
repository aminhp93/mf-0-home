import dynamic from "next/dynamic";

const View = dynamic(() => import("@/features/view/View"), {
  ssr: false,
});

const ViewPage = () => {
  return <View />;
};

export default ViewPage;
