"use client";
import React from 'react';
import Image from 'next/image';
import { useGetAirtcle } from '@/hooks/post/useGetAirtcel';
import Link from 'next/link';
// import { useGetAirtcle } from '@/hooks/post/useGetAirtcle';

interface NewsItem {
  id: string;
  title: string;
  content: string;
  category: string;
  createdAt: string;
  imageUrl: string;
}

const NewsCard: React.FC<NewsItem> = ({ title, content, category, createdAt, imageUrl, id }) => (
  <Link href={`/read/?id=${id}`}>
    <div className="flex flex-col md:flex-row items-center md:items-start gap-4 p-4 bg-white dark:bg-[#1f2937] shadow-md rounded-lg transition duration-300 hover:shadow-lg cursor-pointer group">
      <Image src={imageUrl} alt={title} width={128} height={128} className="w-full md:w-32 h-32 rounded-lg object-cover" />
      <div>
        <h3 className="text-xl font-semibold mb-2 text-darkBlue dark:text-pitch group-hover:text-pitch dark:group-hover:text-white transition duration-300">{title}</h3>
        <p className="text-darkBlue dark:text-white mb-2">{content.slice(0, 200)}</p>
        <div className="text-sm text-darkBlue dark:text-pitch flex items-center gap-4">
          <span className='bg-darkBlue dark:bg-pitch p-0.5 px-1.5 rounded-md text-pitch dark:text-darkBlue font-normal'>{category}</span>
          <span>{new Date(createdAt).toLocaleDateString()}</span>
        </div>
      </div>
      {/* <button>Read More</button> */}
    </div>
  </Link>
);

const ExclusiveNews: React.FC = () => {
  const { data: newsItems, isLoading, isError } = useGetAirtcle();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !newsItems) {
    return <div>Error fetching news items.</div>;
  }

  const featuredNews: NewsItem = newsItems[0];

  return (
    <div className="bg-white dark:bg-bgDark py-12 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-darkBlue dark:text-pitch">Latest News</h2>
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {newsItems.map((item: NewsItem, index: number) => (
              <NewsCard key={index} {...item} />
            ))}
          </div>
          <div className="lg:col-span-1 group cursor-pointer">
            <Image src={featuredNews.imageUrl} alt={featuredNews.title} width={500} height={256} className="w-full h-64 rounded-lg object-cover mb-4" />
            <h3 className="text-2xl font-semibold mb-2 text-darkBlue dark:text-pitch group-hover:text-pitch dark:group-hover:text-white transition duration-300">
              {featuredNews.title}
            </h3>
            <div className="text-sm text-darkBlue dark:text-pitch flex items-center gap-4 mb-2">
              <span className='bg-darkBlue dark:bg-pitch p-0.5 px-1.5 rounded-md text-pitch dark:text-darkBlue font-normal'>{featuredNews.category}</span>
              <span>{new Date(featuredNews.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExclusiveNews;
