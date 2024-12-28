// "use client"
import Header from "@/components/Menubars/Header";
import Sidebar from "@/components/Menubars/Sidebar";
import isAuthnticated from "@/hooks/user/isAuthnticated";
import { redirect } from "next/navigation";
const AdminDashboard = async () => {
  const auth = await isAuthnticated();
  if (!auth) {
    redirect("/login");
  }
  return (
    <div className="admin-dashboard flex h-screen" suppressHydrationWarning={true}>
      <Sidebar />

      <div className="flex-1 flex flex-col pt-16 pl-64"> {/* Add margin-left to account for the sidebar */}
        <Header />

        <div className="flex-1 overflow-y-auto text-white p-8 bg-gray-800">
          <h1 className="text-4xl font-bold">Welcome to the Admin Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;