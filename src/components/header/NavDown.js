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
            <nav className='p-5 flex justify-end items-center bg-blue-500 transition-all'>
                <button onClick={() => setIsDisplayed(false)}><FontAwesomeIcon icon={faBars} /></button>
            </nav>
        )
        :
        (
            <nav className='transition-all lg:mx-16 lg:p-3 bg-white text-[#516191] flex flex-col lg:flex-row p-4 mx-2 lg:justify-start lg:items-center'>
                <div className='border-b-2 py-3 w-full lg:w-auto lg:border-none'>
                    <a href="" className='hover:text-pink-700 lg:p-2 uppercase'>Accueil</a>
                    <button onClick={() => setIsDisplayed(true)} className='float-right lg:hidden'><FontAwesomeIcon icon={faTimes} /></button>
                </div>
                <a href="" className='w-full py-3 border-b-2 lg:w-auto lg:border-none hover:text-pink-700 lg:p-2 uppercase'>Apropos</a>
                <a href="" className='w-full py-3 border-b-2 lg:w-auto lg:border-none hover:text-pink-700 lg:p-2 uppercase'>Services</a>
            </nav>
        )
    }
       
    </>
  );
};

export default NavDown;
