import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const NavUp = () => {
  return (
        <nav className='hidden md:hidden md:border-b-2 md:mx-16 lg:flex md:justify-center md:items-center md:p-3 bg-white text-[#516191]'>
            <div className='md:mx-4 md:flex md:items-center'>
                <FontAwesomeIcon className='md:mr-3 bg-blue-200 md:text-3xl md:p-2 rounded-full' icon={faPhoneAlt} />
                <span>+261 32 00 550 01</span>
            </div>
            <div className='md:mx-4 md:flex md:items-center'>
                <FontAwesomeIcon className='md:mr-3 bg-blue-200 md:text-3xl md:p-2 rounded-full' icon={faEnvelope} />
                <span>contact@medicaid.com</span>
            </div>
            <div className='md:mx-4 md:flex md:items-center'>
                <FontAwesomeIcon className='md:mr-3 bg-blue-200 md:w-12 md:h-7 md:text-4xl md:p-2 rounded-full' icon={faMapMarkerAlt} />
                <span>Lot 421, Rue St Patrick</span>
            </div>
            <a href='#rdv' className='bg-pink-600 md:py-3 md:px-5 text-white md:rounded-3xl'>Prendre rendez-vous</a>
        </nav>
    );
};

export default NavUp;
