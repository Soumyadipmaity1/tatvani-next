"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useCallback } from 'react';

type Testimonial = {
  id: number;
  name: string;
  title: string;
  testimonial: string;
  rating: number;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO at CompanyX",
    testimonial: "This service was fantastic! The team was professional, timely, and exceeded my expectations. I highly recommend them.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "Marketing Director at BrandY",
    testimonial: "I've never been more impressed with a company. They truly care about their customers and go the extra mile!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    id: 3,
    name: "Alice Johnson",
    title: "Entrepreneur",
    testimonial: "Their attention to detail and dedication to delivering quality work really sets them apart. I couldn't be happier!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/65.jpg",
  },
  {
    id: 4,
    name: "Michael Brown",
    title: "Founder of StartupZ",
    testimonial: "I'm amazed by their service! They helped us scale up and grow in ways we couldn't have done on our own.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/76.jpg",
  },
];

const TestimonialSlider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const getVisibleCount = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1280) return 3;
      if (window.innerWidth >= 768) return 2;
      return 1;
    }
    return 1;
  };

  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + visibleCount) >= testimonials.length ? 0 : prevIndex + visibleCount
    );
  }, [visibleCount]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - visibleCount : prevIndex - visibleCount
    );
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [visibleCount, nextSlide]);

  return (
    <section className="py-20 bg-gray-300 dark:bg-gray-900 xl:px-20 px-5 relative">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 dark:text-white">
          What Our Clients Say
        </h2>
        <div className="relative overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(-${currentIndex * (100 / visibleCount)}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={`w-full flex-shrink-0 px-2 ${
                visibleCount === 3 ? 'w-1/3' : visibleCount === 2 ? 'w-1/2' : 'w-full'
              }`}>
                <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg p-6 transition duration-300 h-full">
                  <FaQuoteLeft className="text-3xl text-green-400 opacity-50 mb-4" />
                  <p className="text-gray-600 dark:text-gray-300 mb-4 italic">{testimonial.testimonial}</p>
                  <div className="flex items-center space-x-4 mt-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={64}
                      height={64}
                      className="rounded-full border-4 border-green-500"
                    />
                    <div>
                      <h3 className="text-lg font-bold text-gray-800 dark:text-white">{testimonial.name}</h3>
                      <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.title}</p>
                    </div>
                  </div>
                  <div className="flex mt-4 space-x-1">
                    {Array.from({ length: testimonial.rating }).map((_, index) => (
                      <FaStar key={index} className="text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button onClick={prevSlide} className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md">
          <FaChevronLeft className="text-gray-800 dark:text-white" />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-700 rounded-full p-2 shadow-md">
          <FaChevronRight className="text-gray-800 dark:text-white" />
        </button>
      </div>
    </section>
  );
};
export default TestimonialSlider;

