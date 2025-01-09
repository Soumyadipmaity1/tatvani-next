"use client";
import { FaFeather, FaCalendarAlt } from 'react-icons/fa';
import Image from 'next/image';
import { FC } from 'react';
import { useGetStories } from '@/hooks/post/useGetStories';

interface Poem {
  title: string;
  description: string;
  poet: string;
  date: string;
  image: string;
}

const ExclusiveStory: FC = () => {
  const { data, isLoading, isError } = useGetStories();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error fetching stories.</div>;
  }

  const featuredPoem = data[0] ? {
    title: data[0].title,
    description: data[0].content.slice(0, 150),
    date: new Date(data[0].createdAt).toLocaleDateString(),
    image: data[0].imageUrl,
    poet: data[0].author,
  } : null;

  return (
    <div className="bg-white dark:bg-bgDark py-16 px-5 sm:px-16 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-darkBlue dark:text-pitch text-center transition-colors duration-300">
          Exclusive Stories
        </h2>

        <div className="grid lg:grid-cols-3 grid-rows-2 gap-5">
          {featuredPoem && (
            <div className="lg:col-span-2 row-span-2 p-6 bg-darkBlue text-white rounded-lg overflow-hidden relative shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl group">
              <Image
                src={featuredPoem.image}
                alt={featuredPoem.title}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 w-full h-full opacity-30"
              />
              <div className="relative z-10">
                <h3 className="text-4xl font-bold mb-4 group-hover:text-pitch transition-colors duration-300">
                  {featuredPoem.title}
                </h3>
                <p className="text-xl mb-4 italic">{featuredPoem.poet}</p>
                <p className="text-base mb-6">
                  {featuredPoem.description}...
                </p>
                <div className="flex items-center text-pitch gap-6">
                  <span className="flex items-center gap-2">
                    <FaFeather /> {featuredPoem.poet}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt /> {featuredPoem.date}
                  </span>
                </div>
              </div>
            </div>
          )}

          {data.slice(1).map((poem: any, index: number) => (
            <div
              key={index}
              className="flex flex-col p-6 bg-white dark:bg-darkBlue rounded-lg shadow-lg transition-transform transform hover:scale-100 duration-500 relative overflow-hidden cursor-pointer hover:shadow-lg group"
            >
              <Image
                src={poem.imageUrl}
                alt={poem.title}
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 w-full h-full opacity-20"
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-darkBlue dark:text-pitch group-hover:text-pitch dark:group-hover:text-darkBlue transition-colors duration-300">
                  {poem.title}
                </h3>
                <p className="text-darkBlue dark:text-pitch mb-4 transition-colors duration-300">
                  {poem.content.slice(0, 150)}...
                </p>
                <div className="flex items-center justify-between text-sm text-darkBlue dark:text-pitch transition-colors duration-300">
                  <span className="flex items-center gap-2">
                    <FaFeather className="text-darkBlue dark:text-pitch transition-colors duration-300" /> {poem.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt className="text-darkBlue dark:text-pitch transition-colors duration-300" /> {new Date(poem.createdAt).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExclusiveStory;
