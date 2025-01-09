"use client"

import { useGetPoem } from "@/hooks/post/useGetPoet";
import Image from "next/image";

// Define an interface for the poem data
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
    imageUrl: "https://images.unsplash.com/photo-1605615912786-68946436f590", // Example image from Unsplash
  },
  {
    title: "Echoes of the Heart",
    poet: "Jane Smith",
    date: "October 9, 2024",
    category: "Love",
    imageUrl: "https://images.unsplash.com/photo-1534217035714-fd40c090925b", // Example image from Unsplash
  },
  {
    title: "Dreams Beyond",
    poet: "Samuel Green",
    date: "October 8, 2024",
    category: "Fantasy",
    imageUrl: "https://images.unsplash.com/photo-1521344442381-d38db0e5dbf3", // Example image from Unsplash
  },
  {
    title: "The Silent Forest",
    poet: "Emily Rose",
    date: "October 7, 2024",
    category: "Mystery",
    imageUrl: "https://images.unsplash.com/photo-1522551358880-b72f97bc1481", // Example image from Unsplash
  },
];

const FeaturedPoems: React.FC = () => {

  const poemsDATA = useGetPoem();
  console.log(poemsDATA.data);

  return (
    <div className="sm:px-20 xl:px-10 2xl:px-20 px-4 bg-white py-20">
      <div className="text-center mb-12">
        <h2 className="sm:text-5xl text-4xl text-bold sm:font-extrabold text-[#3d3b3a] mb-4 tracking-widest uppercase">
          Featured Poems
        </h2>
        <p className="text-lg text-[#3d3b3a] tracking-wider">Latest & Magical Words</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {poems.map((poem, index) => (
            <div
              key={index}
              className="relative bg-[#3d3b3a] dark:bg-black rounded-xl shadow-2xl overflow-hidden group transition-transform duration-300 transform hover:scale-105"
            >
              {/* Category */}
              <span className="absolute top-4 left-4 bg-[#ff7f57] text-[#3d3b3a] dark:text-black py-1 px-3 rounded-full text-sm tracking-wider shadow-lg z-10">
                {poem.category}
              </span>

              <div className="h-60 overflow-hidden">
                <Image
                  src={poem.imageUrl}
                  alt={poem.title}
                  width={400} // Set the width for your images
                  height={300}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg=="
                  className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="p-6 text-white relative z-10">
                <h3 className="text-2xl font-bold text-[#ffff] group-hover:text-white transition-colors duration-300">
                  {poem.title}
                </h3>
                <p className="text-lg text-[#ffff] mt-2">
                  By: <span className="font-medium text-[#ffff]">{poem.poet}</span>
                </p>
                <p className="text-sm mt-1 font-medium text-[#ffff]">{poem.date}</p>

                <div className="mt-4">
                  <button className="bg-[#ff7f57] hover:text-white text-[#3d3b3a] dark:text-black font-semibold py-1 px-4 border-[#ff7f57] border-2 rounded-full hover:bg-transparent transition-colors duration-300">
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
