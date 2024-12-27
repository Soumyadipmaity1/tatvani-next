import { FaFeather, FaCalendarAlt } from 'react-icons/fa';

interface Poem {
  title: string;
  description: string;
  poet: string;
  date: string;
  image: string;
}

const ExclusivePoetry: React.FC = () => {
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
      description: "Beneath the moon’s quiet gaze, a stolen dream returns to play...",
      poet: "Emily Dickinson",
      date: "21/09/2023",
      image: 'https://img.freepik.com/premium-photo/concept-womans-health_self-care-fashion-beauty-healthy-lifestyle-ad_1294533-4811.jpg',
    },
  ];

  const featuredPoem: Poem = {
    title: "Whispers of the Soul",
    description: "In the dance of life, the soul whispers songs only the heart can hear...",
    poet: "William Wordsworth",
    date: "25/09/2023",
    image: 'https://img.freepik.com/premium-photo/concept-womans-health_self-care-fashion-beauty-healthy-lifestyle-ad_1294533-4811.jpg',
  };

  return (
    <div className="bg-gray-50 py-16 px-5 sm:px-16" suppressHydrationWarning={true}> >
      <div className="container mx-auto">
        <h2 className="text-5xl font-bold mb-12 text-gray-900 text-center">Exclusive Poetry</h2>

        <div className="grid lg:grid-cols-3 grid-rows-2 gap-5">
          <div className="lg:col-span-2 row-span-2 p-6 bg-black text-white rounded-lg overflow-hidden relative shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl group">
            <img
              src={featuredPoem.image}
              alt={featuredPoem.title}
              className="absolute inset-0 w-full h-full object-cover opacity-30"
            />
            <div className="relative z-10">
              <h3 className="text-4xl font-bold mb-4 group-hover:text-indigo-500 transition-colors duration-300">
                {featuredPoem.title}
              </h3>
              <p className="text-xl mb-4 italic">{featuredPoem.poet}</p>
              <p className="text-base mb-6">
                In the dance of life, the soul whispers songs only the heart can hear...
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

          {poems.map((poem, index) => (
            <div
              key={index}
              className="flex flex-col p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-100 duration-500 relative overflow-hidden cursor-pointer hover:shadow-lg group"
            >
              <img
                src={poem.image}
                alt={poem.title}
                className="absolute inset-0 w-full h-full object-cover opacity-20"
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-2 text-gray-900 group-hover:text-indigo-500 transition-colors duration-300">
                  {poem.title}
                </h3>
                <p className="text-gray-700 mb-4">{poem.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span className="flex items-center gap-2">
                    <FaFeather className="text-gray-600" /> {poem.poet}
                  </span>
                  <span className="flex items-center gap-2">
                    <FaCalendarAlt className="text-gray-600" /> {poem.date}
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