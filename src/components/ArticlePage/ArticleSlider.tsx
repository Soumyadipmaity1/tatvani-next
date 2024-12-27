"use client";

import dynamic from 'next/dynamic';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Slider = dynamic(() => import('react-slick'), { ssr: false });

interface Slide {
  id: number;
  category: string;
  title: string;
  image: string;
  date: string;
  categoryColor: string;
}

const ArticleSlider: React.FC = () => {
  const slidesData: Slide[] = [
    {
      id: 1,
      category: 'Food',
      title: 'Health Benefits of Chocolates',
      image: 'https://media.istockphoto.com/id/1468860049/photo/fitness-woman-eating-a-healthy-poke-bowl-in-the-kitchen-at-home.jpg?s=612x612&w=0&k=20&c=XDY46BP4RgFqq27GjLYbrAhIUnz3rkKXlu0axO-N39A=',
      date: '3 days ago',
      categoryColor: 'bg-green-500',
    },
    {
      id: 2,
      category: 'Fashion',
      title: 'Style Your Car with Class',
      image: 'https://img.freepik.com/premium-photo/concept-womans-health-self-care-fashion-beauty-healthy-lifestyle-ad_1294533-4811.jpg',
      date: '3 days ago',
      categoryColor: 'bg-pink-500',
    },
    {
      id: 3,
      category: 'Lifestyle',
      title: 'Future of Natural Beauty',
      image: 'https://media.istockphoto.com/id/1441759606/photo/happy-sportswoman-with-earbuds-running-in-the-park.jpg?s=612x612&w=0&k=20&c=_RHiYpQFiZRxESWzCsr8k9SsOr-T-Qj3OcpINB1aVrg=',
      date: '3 days ago',
      categoryColor: 'bg-orange-500',
    },
  ];

  const NextArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <button
      className="absolute right-0 items-center pt-2 top-1/2 transform -translate-y-1/2 bg-black/10 px-3 hover:bg-black/40 flex h-[400px] text-3xl text-white z-10"
      onClick={onClick}
    >
      <FaChevronRight />
    </button>
  );

  const PrevArrow: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
    <button
    className="absolute left-0 items-center top-1/2 transform -translate-y-1/2 bg-black/10 px-3 hover:bg-black/40 flex h-[400px] text-3xl text-white z-10"
    onClick={onClick}
    >
      <FaChevronLeft />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="relative border-2 bg-black  border-black">
      <Slider {...settings}>
        {slidesData.map((slide) => (
          <div key={slide.id} className="px-0.5 transition-transform transform  duration-500 ease-in-out">
            <div className="relative overflow-hidden group">
              <div
                className="relative"
                style={{
                  backgroundImage: `url(${slide.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '400px',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="absolute top-4 left-4">
                  <span
                    className={`text-white text-xs font-semibold px-2  rounded-full ${slide.categoryColor}`}
                  >
                    {slide.category}
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-yellow-400 transition-colors duration-300">
                    {slide.title}
                  </h3>
                  <p className="text-sm">{slide.date}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ArticleSlider;
