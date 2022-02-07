import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const NavDown = () => {
    const [isClicked, setIsClicked] = useState(false);

  return (
    <>
        <div className={`flex justify-between items-center py-3 px-4 lg:hidden ${isClicked ? 'shadow-none' : 'shadow'}`}>
            <h1 className='text-xl font-bold'>M<span className='text-[#516191]'>e</span>di<span className='text-pink-700'>k</span>Ai<span className='text-pink-400'>d</span></h1>
            { isClicked ? 
            <FontAwesomeIcon className='cursor-pointer p-1 text-4xl lg:hidden' icon={faTimes} onClick={ () => setIsClicked(isClicked => !isClicked) } />
            :
            <FontAwesomeIcon className='cursor-pointer p-2 text-4xl lg:hidden' icon={faBars} onClick={ () => setIsClicked(isClicked => !isClicked) } />
            }
        </div>
        {
            isClicked ?
            (
                <div className='w-full lg:hidden px-4 shadow flex-col justify-evenly items-start leading-8 lg:gap-10 flex'>
                    <a className='hover:text-pink-700 py-2 text-[#516191] uppercase border-b-2 w-full text-primary hover:text-secondary' href="#hero">Accueil</a>
                    <a className='hover:text-pink-700 py-2 text-[#516191] uppercase border-b-2 w-full text-primary hover:text-secondary' href="#bio">A propos</a>
                    <a className='hover:text-pink-700 py-2 text-[#516191] uppercase w-full text-primary hover:text-secondary' href="#services">Services</a>
                </div>
            )
            :
            (
                <nav className='hidden lg:flex lg:flex-row lg:justify-center lg:items-center py-3 px-8 shadow-md'>
                    <div className='flex-col justify-evenly items-start lg:justify-between lg:items-center lg:flex-row leading-8 lg:gap-10 lg:flex'>
                        <a className='hover:text-pink-700 py-2 text-[#516191] uppercase' href="#hero">Accueil</a>
                        <a className='hover:text-pink-700 py-2 text-[#516191] uppercase' href="#bio">A propos</a>
                        <a className='hover:text-pink-700 py-2 text-[#516191] uppercase' href="#services">Services</a>
                    </div>
                </nav>
            )
        }
    </>
  );
};

export default NavDown;
