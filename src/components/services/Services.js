import React from 'react';
import Card from './Card';
import img1 from '../../assets/images/med01.jpg';
import img2 from '../../assets/images/med02.jpg';
import img3 from '../../assets/images/med03.jpg';

const Services = () => {
  return (
        <div className='p-6 mt-24 text-[#516191] flex flex-col lg:flex-row'>
            <div className='lg:w-1/3 lg:p-5'>
                <h2 className='text-4xl leading-10 mb-5'>Nous offrons des <b>services médicaux</b></h2>
                <p className='text-lg leading-8 mb-8'>Nous sommes spécialisés dans de nombreux domaines médicaux et avons 
                    à notre disposition des installations derniers cris.
                </p>
                <p className='font-semibold'>Numéro d'urgence: </p>
                <p className='text-2xl font-bold mb-16'>+261 32 51 010 12</p>
            </div>
            <div className='lg:w-2/3 flex flex-wrap justify-between items-center'>
                <Card image={img1} mainTitle={"Disponible 24/24h 7/7j"} />
                <Card image={img2} mainTitle={"Médecin professionnel"} />
                <Card image={img3} mainTitle={"Laboratoire de qualité"} />
                <Card image={img1} mainTitle={"Consultation gratuite"} />
            </div>
        </div>
    );
};

export default Services;
