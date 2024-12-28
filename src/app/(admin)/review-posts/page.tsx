import ReviewPost from "@/components/AdminPage/reviewPost";
import Header from "@/components/Menubars/Header";
import Sidebar from "@/components/Menubars/Sidebar";


const ReviewPostPage = () => {
  return (
    <div className="admin-dashboard flex" suppressHydrationWarning={true}>
      <Sidebar />
      <div className="flex-1 p-8 bg-gray-800 pt-16  pl-64">
        <Header/>
        <ReviewPost/>
      </div>
    </div>
  );
};

export default ReviewPostPage;
