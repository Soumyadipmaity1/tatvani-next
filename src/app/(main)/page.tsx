import FeaturesSection from "@/components/HomePage/features";
import AboutSection from "@/components/HomePage/HomeAbout";
import Slider from "@/components/HomePage/slider";
import LatestNews from "@/components/HomePage/LatestNews";
import FeaturedPoems from "@/components/HomePage/LatestPoem";
import FeaturedStories from "@/components/HomePage/LatestStories";
import TestimonialSlider from "@/components/HomePage/Testimonial";
import AdvertisementSection from "@/components/HomePage/Advertisement";

const shops = [
  {
    name: "Shop 1",
    address: "123 Main St",
    image: "https://via.placeholder.com/150",
    description: "A great shop for all your needs.",
    mapLink: "https://goo.gl/maps/GreenLeafCafeLink",
  },
  {
    name: "Shop 2",
    address: "456 Elm St",
    image: "https://via.placeholder.com/150",
    description: "Another great shop nearby.",
    mapLink: "https://goo.gl/maps/GreenLeafCafeLink",
  },
];

export default function Home() {
  return (
   <div className="" suppressHydrationWarning={true}>
    <Slider/>
    <AboutSection/>
    <FeaturesSection/>
    <FeaturedPoems/>
    <LatestNews/>
    <FeaturedStories/>
    <TestimonialSlider/>
    <AdvertisementSection shops={shops} />
   </div>
  );
}
