import LegacyLayout from "@/features/layout/LegacyLayout";

const ViewPage = () => {
  return <div>ViewPage</div>;
};

ViewPage.getLayout = (page: React.ReactNode) => (
  <LegacyLayout>{page}</LegacyLayout>
);

export default ViewPage;
