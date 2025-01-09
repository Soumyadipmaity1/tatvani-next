"use client";
import { useGetPoem } from '@/hooks/post/useGetPoet';
import { FaFeather, FaCalendarAlt } from 'react-icons/fa';
// import { useGetPoem } from '@/hooks/post/useGetPoem';

interface Poem {
  title: string;
  content:string;
  poet: string;
  date: string;
  imageUrl: string;
}

const ExclusivePoetry: React.FC = () => {
  const { data: poems, isLoading, isError } = useGetPoem();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !poems) {
    return <div>Error fetching poems.</div>;
  }

  const featuredPoem: Poem = poems[0];

  return (
    <div className="bg-gray-50 dark:bg-bgDark py-16 px-5 sm:px-16" suppressHydrationWarning={true}> 
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-darkBlue dark:text-pitch text-center">Exclusive Poetry</h2>

        <div className="grid lg:grid-cols-3 grid-rows-2 gap-5">
          <div className="lg:col-span-2 row-span-2 p-6 bg-darkBlue text-white rounded-lg overflow-hidden relative shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl group">
            <img
              src={featuredPoem.imageUrl}
              alt={featuredPoem.title}
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-4 group-hover:text-pitch transition-colors duration-300">
                {featuredPoem.title}
              </h3>
              <p className="text-xl mb-4 italic">{featuredPoem.poet}</p>
              <p className="text-base mb-6">
                {featuredPoem.content.slice(0,200)}
              </p>
              <div className="flex items-center text-gray-300 gap-6">
                <span className="flex items-center gap-2">
                  <FaFeather /> {featuredPoem.poet}
                </span>
                <span className="flex items-center gap-2">
                  <FaCalendarAlt /> {featuredPoem.date}
                </span>
              </div>
            </div>
          </div>

          {poems.slice(1).map((poem:Poem, index:number) => (
            <div
              key={index}
              className="flex flex-col p-6 bg-white dark:bg-darkBlue rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-500 relative overflow-hidden cursor-pointer hover:shadow-xl group"
            >
              <img
                src={poem.imageUrl}
                alt={poem.title}
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-darkBlue dark:text-pitch group-hover:text-pitch dark:group-hover:text-white transition-colors duration-300">
                  {poem.title}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mb-4">{poem.content.slice(0,200)}</p>
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span className="flex items-center gap-2">
                    <FaFeather className="text-darkBlue dark:text-pitch" /> {poem.poet}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt className="text-darkBlue dark:text-pitch" /> {poem.date}
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

export default ExclusivePoetry;
