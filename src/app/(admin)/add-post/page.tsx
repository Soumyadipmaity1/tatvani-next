import AddPost from "@/components/AdminPage/addPost";
import Header from "@/components/Menubars/Header";
import Sidebar from "@/components/Menubars/Sidebar";


const AddPostPage = () => {
    return (
      <div className="admin-dashboard flex " suppressHydrationWarning={true}>
        <Sidebar />
        <div className="flex-1 p-8 bg-gray-800 pt-16  pl-64">
          <Header />
          <AddPost />
        </div>
      </div>
    );
  };
  
  export default AddPostPage;
  