import Image from "next/image";

interface NewsItem {
  title: string;
  date: string;
  imageUrl: string;
}

const news: NewsItem[] = [
  {
    title: "New Technology Trends in 2024",
    date: "October 15, 2024",
    imageUrl: "https://images.unsplash.com/photo-1682084620781-1fe539a65e8a", // Sample image URL from Unsplash
  },
  {
    title: "Global Economy Updates: A Slow Recovery",
    date: "October 14, 2024",
    imageUrl: "https://images.unsplash.com/photo-1607746131764-8c433b7a7062", // Sample image URL from Unsplash
  },
  {
    title: "The Rise of Electric Vehicles Worldwide",
    date: "October 13, 2024",
    imageUrl: "https://images.unsplash.com/photo-1556740727-6c5be3e26d47", // Sample image URL from Unsplash
  },
  {
    title: "Breakthroughs in AI: What's Next?",
    date: "October 12, 2024",
    imageUrl: "https://images.unsplash.com/photo-1518709268802-d991e1802d7e", // Sample image URL from Unsplash
  },
];

const LatestNews: React.FC = () => {
  return (
    <div className="bg-[#fef8c7] 2xl:px-20 sm:px-20 xl:px-10 px-4 py-20">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gray-800 mb-4 uppercase tracking-wider">
          Latest News
        </h2>
        <p className="text-lg text-gray-500 tracking-wider">
          Stay updated with recent news
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {news.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden group relative transition-transform duration-300 transform hover:scale-105"
            >
              <div className="h-52 overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={400} // Set appropriate width for your images
                  height={300} // Set appropriate height for your images
                  className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-2xl font-bold hover:underline text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-500">{item.date}</p>
              </div>

              <div className="absolute top-0 left-0 mt-4 ml-4 bg-gray-900 text-white px-3 py-1 text-xs rounded-full transition-colors duration-300">
                {item.date}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
