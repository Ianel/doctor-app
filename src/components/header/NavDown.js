import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const NavDown = () => {
    const [isDisplayed, setIsDisplayed] = useState(false);

  return (
    <>
    {
        isDisplayed ?
        (
            <nav className='p-4 flex justify-between items-center bg-white transition-all'>
                <h1 className='text-xl font-bold'>M<span className='text-[#516191]'>e</span>di<span className='text-pink-700'>k</span>Ai<span className='text-pink-400'>d</span></h1>
                <button onClick={() => setIsDisplayed(false)}><FontAwesomeIcon icon={faBars} /></button>
            </nav>
        )
        :
        (
            <nav className='shadow-md sticky top-0 transition-all bg-white text-[#516191] flex flex-col lg:flex-row p-4 lg:justify-center lg:items-center'>
                <div className='border-b-2 py-3 w-full lg:w-auto lg:border-none'>
                    <a href="#hero" className='hover:text-pink-700 lg:p-2 uppercase'>Accueil</a>
                    <button onClick={() => setIsDisplayed(true)} className='float-right lg:hidden'><FontAwesomeIcon icon={faTimes} /></button>
                </div>
                <a href="#bio" className='w-full py-3 border-b-2 lg:w-auto lg:border-none hover:text-pink-700 lg:p-2 uppercase'>Apropos</a>
                <a href="#services" className='w-full py-3 lg:w-auto lg:border-none hover:text-pink-700 lg:p-2 uppercase'>Services</a>
            </nav>
        )
    }
       
    </>
  );
};

export default NavDown;
