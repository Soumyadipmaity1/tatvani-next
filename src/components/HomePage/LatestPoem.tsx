"use client"

import { useGetPoem } from "@/hooks/post/useGetPoet";
import Image from "next/image";

interface PoemItem {
  title: string;
  poet: string;
  date: string;
  category: string;
  imageUrl: string;
}

const poems: PoemItem[] = [
  {
    title: "Whispers of the Night",
    poet: "John Doe",
    date: "October 10, 2024",
    category: "Nature",
    imageUrl: "https://images.unsplash.com/photo-1605615912786-68946436f590",
  },
  {
    title: "Echoes of the Heart",
    poet: "Jane Smith",
    date: "October 9, 2024",
    category: "Love",
    imageUrl: "https://images.unsplash.com/photo-1534217035714-fd40c090925b",
  },
  {
    title: "Dreams Beyond",
    poet: "Samuel Green",
    date: "October 8, 2024",
    category: "Fantasy",
    imageUrl: "https://images.unsplash.com/photo-1521344442381-d38db0e5dbf3",
  },
  {
    title: "The Silent Forest",
    poet: "Emily Rose",
    date: "October 7, 2024",
    category: "Mystery",
    imageUrl: "https://images.unsplash.com/photo-1522551358880-b72f97bc1481",
  },
];

const FeaturedPoems: React.FC = () => {

  const poemsDATA = useGetPoem();
  console.log(poemsDATA.data);

  return (
    <div className="sm:px-20 xl:px-10 2xl:px-20 px-4 py-20 bg-white dark:bg-[#111827] transition-colors duration-300">
      <div className="text-center mb-12">
        <h2 className="sm:text-5xl text-4xl font-bold mb-4 tracking-widest uppercase text-darkBlue dark:text-pitch transition-colors duration-300">
          Featured Poems
        </h2>
        <p className="text-lg tracking-wider text-darkBlue dark:text-pitch transition-colors duration-300">Latest & Magical Words</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {poems.map((poem, index) => (
            <div
              key={index}
              className="relative rounded-xl shadow-lg overflow-hidden group transition-all duration-300 transform hover:scale-105 hover:shadow-xl bg-white dark:bg-darkBlue border border-pitch dark:border-[#111827]"
            >
              <span className="absolute top-4 left-4 py-1 px-3 rounded-full text-sm font-semibold tracking-wider shadow-lg z-10 bg-pitch text-darkBlue dark:bg-darkBlue dark:text-pitch transition-colors duration-300">
                {poem.category}
              </span>

              <div className="h-56 overflow-hidden">
                <Image
                  src={poem.imageUrl}
                  alt={poem.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-darkBlue via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500" />

              <div className="p-6 relative z-10 text-darkBlue dark:text-pitch transition-colors duration-300">
                <h3 className="text-2xl font-bold hover:underline transition-colors duration-300">
                  {poem.title}
                </h3>
                <p className="text-lg mt-2 transition-colors duration-300">
                  By: <span className="font-medium">{poem.poet}</span>
                </p>
                <p className="text-sm mt-1 opacity-80 transition-colors duration-300">{poem.date}</p>

                <div className="mt-5">
                  <button className="bg-pitch hover:bg-darkBlue font-semibold py-2 px-5 rounded-full transition-all duration-300 text-darkBlue hover:text-pitch border-2 border-pitch hover:border-pitch dark:bg-darkBlue dark:text-pitch dark:hover:bg-pitch dark:hover:text-darkBlue">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedPoems;