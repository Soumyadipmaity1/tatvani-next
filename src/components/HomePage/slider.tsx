"use client";
import React, { useState, useCallback } from "react";
import Image from 'next/image';

type Slide = {
  src: string;
  title: string;
  description: string;
};

const slides: Slide[] = [
  {
    src: "https://images.unsplash.com/photo-1581093588401-dc9864878aad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    title: "Scenic Nature",
    description: "Explore the beauty of the outdoors.",
  },
  {
    src: "https://images.unsplash.com/photo-1542206395-9feb3edaa68f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    title: "City Skyline",
    description: "Discover urban wonders.",
  },
  {
    src: "https://images.unsplash.com/photo-1517816743773-6e0fd518b4a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1920",
    title: "Mountain Adventure",
    description: "Experience the thrill of heights.",
  },
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={slide.src}
              alt={slide.title}
              layout="fill"
              objectFit="cover"
              priority={index === currentIndex}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <h3 className="text-3xl font-semibold">{slide.title}</h3>
              <p className="text-lg">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 z-10"
        aria-label="Previous slide"
      >
        &#8249;
      </button>
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-75 z-10"
        aria-label="Next slide"
      >
        &#8250;
      </button>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentIndex ? 'bg-white' : 'bg-gray-500 hover:bg-gray-300'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
