import Image from 'next/image';

const poems = [
  {
    title: "Whispers of the Night",
    poet: "John Doe",
    date: "October 10, 2024",
    category: "Nature",
    imageUrl: "https://via.placeholder.com/400x300.png?text=Poem+Image+1",
  },
  {
    title: "Echoes of the Heart",
    poet: "Jane Smith",
    date: "October 9, 2024",
    category: "Love",
    imageUrl: "https://via.placeholder.com/400x300.png?text=Poem+Image+2",
  },
  {
    title: "Dreams Beyond",
    poet: "Samuel Green",
    date: "October 8, 2024",
    category: "Fantasy",
    imageUrl: "https://via.placeholder.com/400x300.png?text=Poem+Image+3",
  },
  {
    title: "The Silent Forest",
    poet: "Emily Rose",
    date: "October 7, 2024",
    category: "Mystery",
    imageUrl: "https://via.placeholder.com/400x300.png?text=Poem+Image+4",
  },
];

const FeaturedStories = () => {
  return (
    <div className="sm:px-20 xl:px-10 2xl:px-20 px-4 bg-white py-20">
      <div className="text-center mb-12">
        <h2 className="sm:text-5xl text-4xl text-bold sm:font-extrabold text-[#3d3b3a] mb-4 tracking-widest uppercase">
          Featured Stories
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
                  width={400}
                  height={300}
                  className="w-full h-full object-cover transition-transform duration-500 transform group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

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

export default FeaturedStories;