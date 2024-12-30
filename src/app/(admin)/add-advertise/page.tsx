import AddAdvertise from "@/components/AdminPage/addAdvertise";
import Header from "@/components/Menubars/Header";
import Sidebar from "@/components/Menubars/Sidebar";

const AddAdvertisePage = () => {
    return (
      <div className="admin-dashboard flex" suppressHydrationWarning={true}>
        <Sidebar />
        <div className="flex-1 p-8 bg-gray-800 pt-16  pl-64">
          <Header />
          <AddAdvertise author={""} category={""} content={""} createdAt={""} id={""} imageUrl={""} title={""} updatedAt={""} />
        </div>
      </div>
    );
  };
  
  export default AddAdvertisePage;
  