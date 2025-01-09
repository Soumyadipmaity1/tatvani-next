import { FaLinkedin, FaGithub } from 'react-icons/fa';
import Image from 'next/image';

interface TeamMember {
  name: string;
  role: string;
  image: string;
  quote: string;
}

const TeamSection: React.FC = () => {

  const teamMembers: TeamMember[] = [
    { name: 'John Doe', role: 'CEO & Founder', image: 'https://randomuser.me/api/portraits/men/1.jpg', quote: "Innovation is our driving force." },
    { name: 'Jane Smith', role: 'CTO', image: 'https://randomuser.me/api/portraits/women/1.jpg', quote: "Technology should empower humanity." },
    { name: 'Mike Johnson', role: 'Lead Developer', image: 'https://randomuser.me/api/portraits/men/2.jpg', quote: "Code can change the world." },
    { name: 'Emily Brown', role: 'UX Designer', image: 'https://randomuser.me/api/portraits/women/2.jpg', quote: "Design is about solving problems." },
  ];

  return (
    <section className="sm:py-16 py-14 px-4 sm:px-0">
      <h2 className="text-5xl font-bold text-darkBlue dark:text-pitch mb-16 text-center">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {teamMembers.map((member, index) => (
          <div key={index} className="group relative">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-pitch to-darkBlue dark:from-pitch dark:to-gray-700 rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative bg-blue-50 dark:bg-gray-800 rounded-3xl p-6 space-y-6 transform group-hover:scale-105 transition-all duration-300">
              <div className="relative w-32 h-32 mx-auto rounded-full overflow-hidden shadow-xl">
                <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-darkBlue to-transparent opacity-50"></div>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-semibold text-darkBlue dark:text-pitch">{member.name}</h3>
                <p className="text-pitch dark:text-pitch mt-1 font-medium">{member.role}</p>
              </div>
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-darkBlue dark:text-pitch hover:text-pitch dark:hover:text-gray-50 transition duration-300" aria-label="LinkedIn">
                  <FaLinkedin size={24} />
                </a>
                <a href="#" className="text-darkBlue dark:text-pitch hover:text-pitch dark:hover:text-gray-50 transition duration-300" aria-label="GitHub">
                  <FaGithub size={24} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
