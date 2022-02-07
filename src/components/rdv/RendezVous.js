import React from 'react';
import { InlineWidget } from 'react-calendly';

const RendezVous = () => {
  return (
        <div id='rdv' className='flex flex-col mx-6 lg:mx-10 lg:flex-row lg:justify-between lg:items-center'>
            <h3 className='text-3xl font-bold my-12 text-center lg:w-5/12 text-pink-700 lg:text-5xl'>Prendre rendez-vous</h3>
            <div className='lg:mr-32'>
                <InlineWidget 
                    url="https://calendly.com/ianell-s118/30min"
                    />
            </div>
        </div>
    );
};

export default RendezVous;
