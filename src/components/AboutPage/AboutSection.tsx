import Image from 'next/image';
import { FaPlus } from "react-icons/fa";

const AboutUsSection: React.FC = () => {
  return (
    <div className="sm:bg-blue-50 bg-transparent sm:dark:bg-gray-800 py-12 lg:px-10 rounded-3xl sm:shadow-2xl">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative grid grid-cols-2 grid-rows-2 gap-4">
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?cs=srgb&dl=pexels-soldiervip-1308881.jpg&fm=jpg"
                alt="Creative Work"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="https://gratisography.com/wp-content/uploads/2024/03/gratisography-vr-glasses-800x525.jpg"
                alt="Teamwork"
                layout="fill"
                objectFit="cover"
              />
            </div>

            <div className="absolute inset-0 flex justify-center items-center z-10">
              <div className="bg-yellow-400 dark:bg-yellow-500 text-blue-900 dark:text-gray-800 p-4 rounded-full shadow-lg">
                <FaPlus size={30} />
              </div>
            </div>

            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="https://st.depositphotos.com/1307373/3789/i/450/depositphotos_37896767-stock-photo-love-ladybug-sitting-on-the.jpg"
                alt="Innovation"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="https://static.vecteezy.com/system/resources/thumbnails/026/829/465/small/beautiful-girl-with-autumn-leaves-photo.jpg"
                alt="Collaboration"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-yellow-400 dark:text-yellow-500 font-bold uppercase mb-4">About Us</h2>
            <h1 className="text-4xl font-extrabold text-blue-900 dark:text-yellow-400 mb-6">
              Empowering Your Digital Tomorrow
            </h1>
            <p className="text-blue-800 dark:text-gray-300 mb-8 leading-relaxed">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. Lorem
              Ipsum is simply dummy text of the printing and typesetting
              industry. It is a long established fact that a reader will be
              distracted by the readable content of a page when looking at its
              layout. Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>

            <div className="flex justify-center">
              <div className="flex items-center text-blue-900 dark:text-yellow-500 hover:text-blue-900 dark:hover:text-gray-800 justify-center border-2 border-yellow-400 dark:border-yellow-500 rounded-lg py-4 px-8 cursor-pointer hover:bg-yellow-400 dark:hover:bg-yellow-500 transition-all duration-300">
                <span className="font-bold text-xl ">
                  About Mynimalistic
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
