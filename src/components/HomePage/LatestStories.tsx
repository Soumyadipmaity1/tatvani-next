"use client"
import { useGetStories } from '@/hooks/post/useGetStories';
import Image from 'next/image';

// const poems = [
//   {
//     title: "Whispers of the Night",
//     poet: "John Doe",
//     date: "October 10, 2024",
//     category: "Nature",
//     imageUrl: "https://via.placeholder.com/400x300.png?text=Poem+Image+1",
//   },
//   {
//     title: "Echoes of the Heart",
//     poet: "Jane Smith",
//     date: "October 9, 2024",
//     category: "Love",
//     imageUrl: "https://via.placeholder.com/400x300.png?text=Poem+Image+2",
//   },
//   {
//     title: "Dreams Beyond",
//     poet: "Samuel Green",
//     date: "October 8, 2024",
//     category: "Fantasy",
//     imageUrl: "https://via.placeholder.com/400x300.png?text=Poem+Image+3",
//   },
//   {
//     title: "The Silent Forest",
//     poet: "Emily Rose",
//     date: "October 7, 2024",
//     category: "Mystery",
//     imageUrl: "https://via.placeholder.com/400x300.png?text=Poem+Image+4",
//   },
// ];

const FeaturedStories = () => {
  const { data: poems, isLoading, isError } = useGetStories();
  return (
    <div className="sm:px-20 xl:px-10 2xl:px-20 px-4 bg-white dark:bg-[#111827] py-20 transition-colors duration-300">
      <div className="text-center mb-12">
        <h2 className="sm:text-5xl text-4xl font-bold sm:font-extrabold text-darkBlue dark:text-pitch mb-4 tracking-widest uppercase transition-colors duration-300">
          Featured Stories
        </h2>
        <p className="text-lg text-darkBlue dark:text-pitch tracking-wider transition-colors duration-300">Latest & Magical Words</p>
      </div>

      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {poems && poems.map((poem: any, index: number) => (
            <div
              key={index}
              className="relative bg-white dark:bg-darkBlue rounded-xl shadow-lg overflow-hidden group transition-all duration-300 transform hover:scale-105 border border-pitch dark:border-[#111827]"
            >
              <span className="absolute top-4 left-4 bg-pitch text-darkBlue dark:bg-darkBlue dark:text-pitch py-1 px-3 rounded-full text-sm font-semibold tracking-wider shadow-lg z-10 transition-colors duration-300">
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

              <div className="p-6 text-darkBlue dark:text-pitch relative z-10 transition-colors duration-300">
                <h3 className="text-2xl font-bold hover:underline transition-colors duration-300">
                  {poem.title}
                </h3>
                <p className="text-lg mt-2">
                  By: <span className="font-medium">{poem.author}</span>
                </p>
                <p className="text-sm mt-1 opacity-80">{poem.date}</p>

                <div className="mt-4">
                  <button className="bg-pitch hover:bg-transparent text-darkBlue hover:text-pitch dark:hover:text-white font-semibold py-1 px-4 border-2 border-pitch rounded-full transition-colors duration-300">
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

export default FeaturedStories;