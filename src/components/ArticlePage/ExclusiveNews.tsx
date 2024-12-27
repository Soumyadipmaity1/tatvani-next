import React from 'react';
import Image from 'next/image';

interface NewsItem {
  title: string;
  description: string;
  category: string;
  date: string;
  image: string;
}

const ExclusiveNews: React.FC = () => {
  const newsItems: NewsItem[] = [
    {
      title: "Keep Fit to Avoid Heart Rhythm Disorder and Stroke, Study Suggests",
      description:
        "The study of more than 15,000 people found that physical fitness is linked with a lower likelihood of developing both conditions.",
      category: "Fitness",
      date: "29/08/2023",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "DeBrusk Hopes to Re-sign with Bruins, Eyes 30-Goal Mark This Season",
      description:
        "A year away from hitting unrestricted free agency next summer, Boston Bruins winger Jake DeBrusk said Tuesday he is hoping to sign an extension to stay.",
      category: "Hockey",
      date: "29/08/2023",
      image: "https://via.placeholder.com/150",
    },
    {
      title: "Canada Men's Soccer Training Session Scrapped Amid Compensation Talks",
      description:
        "A planned training session for Canada's men's soccer team was scrapped Friday amid ongoing discussions about player compensation.",
      category: "Football",
      date: "29/08/2023",
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">Latest News</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {newsItems.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 bg-white shadow-md rounded-lg transition duration-300 hover:shadow-lg"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={128}
                  height={128}
                  className="w-full md:w-32 h-32 rounded-lg object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 hover:text-gray-600 transition duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-2">{item.description}</p>
                  <div className="text-sm text-gray-500 flex items-center gap-4">
                    <span className='bg-gray-300 p-0.5 px-1.5 rounded-md text-black font-normal'>{item.category}</span>
                    <span>{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:col-span-1">
              <Image
                src={newsItems[0].image}
                alt={newsItems[0].title}
                width={500}
                height={256}
                className="w-full h-64 rounded-lg object-cover mb-4"
              />
            
              <h3 className="text-2xl font-semibold mb-2 text-gray-900 hover:text-gray-600 transition duration-300">
                {newsItems[0].title}
              </h3>
              <div className="text-sm text-gray-500 flex items-center gap-4 mb-2">
                <span className='bg-gray-300 p-0.5 px-1.5 rounded-md text-black font-normal'>{newsItems[0].category}</span>
                <span>{newsItems[0].date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default ExclusiveNews;
