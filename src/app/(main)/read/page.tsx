"use client"

import { useGetPostById } from '@/hooks/post/useGetPostById';
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

const Page: React.FC = () => {


  const param = useSearchParams();
  const id = param.get('id');
  const { data, isError, isLoading } = useGetPostById(id);

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching post.</p>;
  const { title, content, createdAt, author,imageUrl } = data;

  return (
    <article className="max-w-5xl mx-auto mt-8 bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden mb-10">
      <header className="px-6 py-4 border-b-2 border-gray-400 dark:border-pitch">
        <h1 className="text-4xl font-extrabold mb-2 text-gray-900 dark:text-pitch">{title}</h1>
        <div className="flex items-center text-sm text-gray-600 dark:text-pitch space-x-2">
          <span>{author}</span>
          <span>&bull;</span>
          <span>6 min read</span>
          <span>&bull;</span>
          <span>{
            new Date(createdAt).toLocaleDateString()
            }</span>
        </div>
      </header>
      <div className="px-6 py-4">
        <Image src={imageUrl} alt="UI Design Principles" width={800} height={400} className="w-full rounded-lg" />
        <p className="mt-2 text-gray-800 dark:text-gray-100">{content}</p>
      </div>
    </article>
  )
}

export default Page
