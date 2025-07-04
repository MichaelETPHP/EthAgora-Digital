import React from 'react';
import Hero from '../components/Home/Hero';
import ServicesHighlight from '../components/Home/ServicesHighlight';
import Testimonials from '../components/Home/Testimonials';
import SocialPlatforms from '../components/Home/SocialPlatforms';

const Home = () => {
  return (
    <div>
      <Hero />
      <ServicesHighlight />
      <SocialPlatforms />
      <Testimonials />
    </div>
  );
};

export default Home;