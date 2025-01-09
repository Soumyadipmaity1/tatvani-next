import Image from 'next/image'

const Page: React.FC = () => {
  return (
    <article className="max-w-5xl mx-auto mt-8 bg-white dark:bg-gray-800 shadow-md rounded-lg overflow-hidden mb-10">
      <header className="px-6 py-4 border-b-2 border-gray-400 dark:border-pitch">
        <h1 className="text-4xl font-extrabold mb-2 text-gray-900 dark:text-pitch">Most Important UI Design Principles Every Designer Must Know in 2025</h1>
        <div className="flex items-center text-sm text-gray-600 dark:text-pitch space-x-2">
          <span>Your Name</span>
          <span>&bull;</span>
          <span>6 min read</span>
          <span>&bull;</span>
          <span>Dec 14, 2025</span>
        </div>
      </header>
      <div className="px-6 py-4">
        <Image src="https://via.placeholder.com/800x400" alt="UI Design Principles" width={800} height={400} className="w-full rounded-lg" />
        <p className="mt-2 text-gray-800 dark:text-gray-100">Designing an effective user interface requires a balance between aesthetics and functionality. Key principles include simplicity, which ensures the design is easy to understand and navigate. Consistency across elements, such as typography and spacing, helps maintain visual harmony and improves user familiarity. Accessibility is another critical factor, ensuring the interface can be used by people with diverse abilities. Feedback mechanisms, like animations or message alerts, provide users with an understanding of their actions. Prioritizing mobile-first design is essential, given the dominance of smartphones. Using a clear visual hierarchy guides users to focus on the most important content first. Additionally, understanding user behavior through research and testing allows for iterative improvements. These principles collectively ensure a seamless, engaging, and efficient user experience that meets modern design standards.</p>
        <p className="mt-2 text-gray-800 dark:text-gray-100">Designing an effective user interface requires a balance between aesthetics and functionality. Key principles include simplicity, which ensures the design is easy to understand and navigate. Consistency across elements, such as typography and spacing, helps maintain visual harmony and improves user familiarity. Accessibility is another critical factor, ensuring the interface can be used by people with diverse abilities. Feedback mechanisms, like animations or message alerts, provide users with an understanding of their actions. Prioritizing mobile-first design is essential, given the dominance of smartphones. Using a clear visual hierarchy guides users to focus on the most important content first. Additionally, understanding user behavior through research and testing allows for iterative improvements. These principles collectively ensure a seamless, engaging, and efficient user experience that meets modern design standards.</p>
      </div>
    </article>
  )
}

export default Page
