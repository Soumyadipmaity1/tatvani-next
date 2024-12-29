"use client";

import AboutUsSection from '@/components/AboutPage/AboutSection'
import MissionSection from '@/components/AboutPage/MissionSection';
import VisionSection from '@/components/AboutPage/VisionSection';
import TeamSection from '@/components/AboutPage/TeamSection';
import AdvertisementSection from '@/components/HomePage/Advertisement';

function AboutPage() {


  return (
    <div className="bg-white dark:bg-gray-900" suppressHydrationWarning={true}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        <AboutUsSection />
        <div className="grid md:grid-cols-2 gap-12">
          <MissionSection />
          <VisionSection />
        </div>
        <TeamSection />
      </div>
      <AdvertisementSection shops={[ { name: 'Shop 1', address: '123 Main St', image: 'https://via.placeholder.com/150', description: 'A great shop for all your needs.', mapLink: 'https://goo.gl/maps/GreenLeafCafeLink' }]} />
    </div>
  )
}

export default AboutPage
