import React from 'react';
import Bio from '../../components/bio/Bio';
import Hero from '../../components/hero/Hero';
import Services from '../../components/services/Services';

const Home = () => {
  return (
    <>
        <Hero />
        <Bio />
        <Services />
    </>
  );
};

export default Home;
