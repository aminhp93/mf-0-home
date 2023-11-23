import dynamic from "next/dynamic";
import LegacyLayout from "@/features/layout/LegacyLayout";
import Edit from "@/features/edit/Edit";

const EditPage = () => {
  return <Edit />;
};

EditPage.getLayout = (page: React.ReactNode) => (
  <LegacyLayout>{page}</LegacyLayout>
);

export default dynamic(() => Promise.resolve(EditPage), {
  ssr: false,
});
