"use client"
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
  const poems: Poem[] = [
    {
      title: "The Song of Nature",
      description: "The breeze hums melodies unheard, whispering secrets of the earth...",
      poet: "John Keats",
      date: "12/08/2023",
      image: 'https://img.freepik.com/premium-photo/concept-womans-health-self-care-fashion-beauty-healthy-lifestyle-ad_1294533-4811.jpg',
    },
    {
      title: "A Stolen Dream",
      description: "Beneath the moon's quiet gaze, a stolen dream returns to play...",
      poet: "Emily Dickinson",
      date: "21/09/2023",
      image: 'https://img.freepik.com/premium-photo/concept-womans-health_self-care-fashion-beauty-healthy-lifestyle-ad_1294533-4811.jpg',
    },
  ];


  const { data, isLoading, isError } = useGetStories();
  // const featuredPoem = {
  //   title: data && data[0].title,
  //   description: data && data[0].content(0,150),
  //   date: data && new Date(data[0].createdAt).toLocaleDateString(),
  //   image: data && data[0].imageUrl,
  //   poet: data && data[0].author,
  // };
  const featuredPoem = {
    title: "",
    description: "",
    date: "",
    image: "",
    poet: "",
  };
  return (
    <div className="bg-white dark:bg-bgDark py-16 px-5 sm:px-16 transition-colors duration-300">
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-darkBlue dark:text-pitch text-center transition-colors duration-300">Exclusive Stories</h2>

        <div className="grid lg:grid-cols-3 grid-rows-2 gap-5">
          <div className="lg:col-span-2 row-span-2 p-6 bg-darkBlue text-white rounded-lg overflow-hidden relative shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl group">
            <Image
              src={data && data[0].imageUrl}
              alt={""}
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 w-full h-full opacity-30"
            />
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-4 group-hover:text-pitch transition-colors duration-300">
                {data && data[0].title}
              </h3>
              <p className="text-xl mb-4 italic">{data && data[0].author}</p>
              <p className="text-base mb-6">
                {data && data[0].content.slice(0, 250)+".."}
              </p>
              <div className="flex items-center text-pitch gap-6">
                <span className="flex items-center gap-2">
                  <FaFeather /> {data && data[0].author}
                </span>
                <span className="flex items-center gap-2">
                  <FaCalendarAlt /> {data && new Date(data[0].createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>

          {data && data.map((poem: any, index: number) => (
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
                <p className="text-darkBlue dark:text-pitch mb-4 transition-colors duration-300">{poem.content.slice(0, 150) + "..."}</p>
                <div className="flex items-center justify-between text-sm text-darkBlue dark:text-pitch transition-colors duration-300">
                  <span className="flex items-center gap-2">
                    <FaFeather className="text-darkBlue dark:text-pitch transition-colors duration-300" /> {poem.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt className="text-darkBlue dark:text-pitch transition-colors duration-300" /> {poem.date}
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
