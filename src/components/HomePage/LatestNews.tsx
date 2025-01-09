"use client"
import { useGetAirtcle } from "@/hooks/post/useGetAirtcel";
import Image from "next/image";

interface ArticleItem {
  title: string;
  date: string;
  imageUrl: string;
}

const Article: ArticleItem[] = [
  {
    title: "New Technology Trends in 2024",
    date: "October 15, 2024",
    imageUrl: "https://images.unsplash.com/photo-1682084620781-1fe539a65e8a",
  },
  {
    title: "Global Economy Updates: A Slow Recovery",
    date: "October 14, 2024",
    imageUrl: "https://images.unsplash.com/photo-1607746131764-8c433b7a7062",
  },
  {
    title: "The Rise of Electric Vehicles Worldwide",
    date: "October 13, 2024",
    imageUrl: "https://images.unsplash.com/photo-1556740727-6c5be3e26d47",
  },
  {
    title: "Breakthroughs in AI: What's Next?",
    date: "October 12, 2024",
    imageUrl: "https://images.unsplash.com/photo-1518709268802-d991e1802d7e",
  },
];

const LatestArticle: React.FC = () => {

  const airtcle = useGetAirtcle();

  return (
    <div className="2xl:px-20 sm:px-20 xl:px-10 px-4 py-20 bg-white dark:bg-[#111827]">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-darkBlue dark:text-pitch mb-4 uppercase tracking-wider">
          Latest Article
        </h2>
        <p className="text-lg text-darkBlue dark:text-pitch tracking-wider">
          Stay updated with recent Article
        </p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {airtcle.data && airtcle.data.slice(0,4).map((item: any, index: number) => (
            <div
              key={index}
              className="bg-white dark:bg-darkBlue border border-pitch rounded-lg shadow-md overflow-hidden group relative transition-transform duration-300 transform hover:scale-105"
            >
              <div className="h-52 overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="text-2xl font-bold hover:underline text-darkBlue dark:text-pitch mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-darkBlue dark:text-pitch">
                  {
                    new Date(item.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  }
                </p>
              </div>

              <div className="absolute top-0 left-0 mt-4 ml-4 bg-pitch text-darkBlue dark:bg-darkBlue dark:text-pitch px-3 py-1 text-xs rounded-full transition-colors duration-300">
                {item.author}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestArticle;
