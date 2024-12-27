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
    <section className="bg-[#fef8c7] py-20 px-4 2xl:px-20 sm:px-20 xl:px-10">
      <div className="mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#3d3b3a] mb-8">
          Key Features
        </h2>
        <p className="text-lg md:text-xl text-[#3D4A4F] mb-12">
          Discover the powerful tools and features we offer to make your experience unforgettable.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="feature-card bg-white shadow-lg rounded-lg p-6 transition-transform duration-300 hover:scale-105 hover:shadow-lg border border-black"
            >
              <div className="icon mb-6 text-center text-5xl text-[#3d3b3a]">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-[#3d3b3a] mb-4">
                {feature.title}
              </h3>
              <p className="text-md text-[#3d3b3a]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
