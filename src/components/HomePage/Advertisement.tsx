"use client";

import { useEffect, useState } from "react";
import Image from 'next/image';
import useGetAdvertisemen from "@/hooks/advertisement/useGetAdvertisement";

interface Shop {
  name: string;
  address: string;
  image: string;
  description: string;
  mapLink: string;
}

const AdvertisementSection: React.FC<{ shops: Shop[] }> = ({ shops }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  const advertisement = useGetAdvertisemen();
  console.log(advertisement.data)
  return (
    <div>
      {shops.map(shop => (
        <div key={shop.name}>
          <div className="py-20 bg-gray-100 w-full flex-shrink-0 px-2">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-extrabold text-[#3d3b3a] mb-4 tracking-widest uppercase">
                Advertisement
              </h2>
            </div>
            <div className="flex flex-col gap-8 max-w-5xl mx-auto p-6">
              {isClient && (
                <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6 bg-white rounded-lg shadow-md overflow-hidden">
                  <Image
                    src={shop.image}
                    alt={shop.name}
                    width={192}
                    height={192}
                    className="object-cover w-full md:w-48 h-48"
                  />
                  <div className="p-6 flex flex-col justify-between space-y-4 flex-grow">
                    <h2 className="text-2xl text-[#3d3b3a] font-extrabold">{shop.name}</h2>
                    <p className="text-lg text-[#3d3b3a]">{shop.address}</p>
                    <p className="text-sm text-[#6B7280]">{shop.description}</p>
                    <a
                      href={shop.mapLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline inline-block mt-2"
                    >
                      View on Map
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AdvertisementSection;
