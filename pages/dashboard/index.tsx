import dynamic from "next/dynamic";
import Dashboard from "@/features/dashboard/Dashboard";

const DashboardPage = () => {
  return (
    <div>
      <Dashboard />
    </div>
  );
};

export default dynamic(() => Promise.resolve(DashboardPage), {
  ssr: false,
});
