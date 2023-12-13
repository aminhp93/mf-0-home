import dynamic from "next/dynamic";

const Dashboard = dynamic(() => import("@/features/dashboard/Dashboard"), {
  ssr: false,
});

const DashboardPage = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default DashboardPage;
