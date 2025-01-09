import { FC, ReactElement } from "react";
import { FaCogs, FaShieldAlt, FaChartLine } from "react-icons/fa";

// Define a type for the feature object
interface Feature {
  id: number;
  icon: ReactElement; // Type for React elements (icons)
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    id: 1,
    icon: <FaCogs />,
    title: "High Customization",
    description:
      "Tailor every aspect of your experience with our easy-to-use tools and flexible options.",
  },
  {
    id: 2,
    icon: <FaShieldAlt />,
    title: "Robust Security",
    description: "Keep your data safe with our advanced security protocols and features.",
  },
  {
    id: 3,
    icon: <FaChartLine />,
    title: "Performance Analytics",
    description:
      "Get insights into performance with real-time analytics to make better decisions.",
  },
  {
    id: 4,
    icon: <FaShieldAlt />,
    title: "Data Protection",
    description: "Ensure your information is always secure and protected from threats.",
  },
];

const FeaturesSection: FC = () => {
  return (
    <section className=" bg-darkGreen py-20 px-4 2xl:px-20 sm:px-20 xl:px-10">
      <div className="mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-white dark:text-pitch mb-8">
          Key Features
        </h2>
        <p className="text-lg md:text-xl text-white/80 dark:text-pitch/80 mb-12">
          Discover the powerful tools and features we offer to make your experience unforgettable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative overflow-hidden bg-pitch dark:bg-darkBlue 
                rounded-lg p-6 transform transition-all duration-300 hover:scale-105
                shadow-lg hover:shadow-xl cursor-pointer z-0"
            >
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-darkBlue dark:bg-pitch -translate-x-full 
                group-hover:translate-x-0 transition-transform duration-500 ease-out 
                skew-x-12 -z-10"
              />
              
              <div className="icon mb-6 text-center text-5xl text-darkBlue dark:text-pitch
                group-hover:text-pitch dark:group-hover:text-darkBlue transition-colors duration-300">
                {feature.icon}
              </div>
              
              <h3 className="text-2xl font-bold text-darkBlue dark:text-pitch mb-4
                group-hover:text-pitch dark:group-hover:text-darkBlue transition-colors duration-300">
                {feature.title}
              </h3>
              
              <p className="text-md text-darkBlue/80 dark:text-pitch/80
                group-hover:text-pitch dark:group-hover:text-darkBlue transition-colors duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;