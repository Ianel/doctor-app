import React from 'react';
import Bio from '../../components/bio/Bio';
import Hero from '../../components/hero/Hero';
import RendezVous from '../../components/rdv/RendezVous';
import Services from '../../components/services/Services';

const Home = () => {
  return (
    <>
        <Hero />
        <Bio />
        <Services />
        <RendezVous />
    </>
  );
};

export default Home;
