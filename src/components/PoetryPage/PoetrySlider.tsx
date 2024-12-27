"use client";

import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

interface Slide {
  id: number;
  title: string;
  quote: string;
  poet: string;
  image: string;
}

const PoetrySlider = () => {
  const slidesData: Slide[] = [
    {
      id: 1,
      title: 'The Unspoken Words',
      quote: '“The soul would have no rainbow had the eyes no tears.”',
      poet: 'John Vance Cheney',
      image:
        'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&fit=crop&w=1375&h=800&q=80',
    },
    {
      id: 2,
      title: 'Echoes of Silence',
      quote: '“Silence is a source of great strength.”',
      poet: 'Lao Tzu',
      image:
        'https://images.unsplash.com/photo-1504198458649-3128b932f49b?crop=entropy&fit=crop&w=1375&h=800&q=80',
    },
    {
      id: 3,
      title: 'A Whispering Breeze',
      quote: '“In every change, in every falling leaf, there is some pain, some beauty.”',
      poet: 'Marc Bolan',
      image:
        'https://images.unsplash.com/photo-1504252060324-1c76e12b30b2?crop=entropy&fit=crop&w=1375&h=800&q=80',
    },
  ];

  const NextArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/40 p-2 rounded-full hover:bg-black/70 text-white transition"
      onClick={onClick}
    >
      <FaChevronRight />
    </button>
  );

  const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
    <button
      className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/40 p-2 rounded-full hover:bg-black/70 text-white transition"
      onClick={onClick}
    >
      <FaChevronLeft />
    </button>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
  };

  return (
    <div className="relative bg-gray-100 border-black" suppressHydrationWarning={true}>
      <Slider {...settings}>
        {slidesData.map((slide) => (
          <div key={slide.id} className="px-4 py-10">
            <div className="relative h-[400px] rounded-lg overflow-hidden shadow-lg group transition-all duration-500 ease-linear">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-gray-800/30 to-transparent transition-opacity duration-300 opacity-80 group-hover:opacity-100"></div>
              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-center items-center text-center p-6 text-white">
                <h2 className="text-3xl lg:text-4xl font-extrabold italic mb-4 transition-colors duration-300 group-hover:text-gray-200">
                  {slide.title}
                </h2>
                <p className="text-lg lg:text-xl italic max-w-xl mb-4 transition-colors duration-300 group-hover:text-gray-400">
                  {slide.quote}
                </p>
                <span className="text-sm lg:text-base text-gray-300">
                  — {slide.poet}
                </span>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default PoetrySlider;
