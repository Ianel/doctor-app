import { faFacebook, faLinkedin, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Footer = () => {
  return (
        <footer className='bg-blue-900 text-white p-10'>
            <div className='lg:flex lg:justify-evenly lg:items-start'>
                <div className='my-6'>
                    <h5 className='text-sm font-bold mb-4 uppercase'>Nos bureaux</h5>
                    <p className='my-3'>Lot 421, Rue St Patrick</p>
                    <p>Mon-Thu: 8 a.m. to 4 p.m.</p>
                    <p>Fri: 6 a.m. to 9 p.m.</p>
                    <p>Sat: 10 a.m. to 3 p.m</p>
                    <p className='my-3'>contact@medicaid.com</p>
                    <p className='text-pink-600 font-extrabold my-2'>+261 32 00 550 01</p>
                </div>
                <div className='my-8'>
                    <h5 className='text-sm font-bold mb-4 uppercase'>Liens utiles</h5>
                    <nav className='flex flex-col justify-evenly items-start'>
                        <a className='mx-4' href="#hero"><FontAwesomeIcon className='mr-2' icon={faChevronRight} />Accueil</a>
                        <a className='mx-4' href='#bio'><FontAwesomeIcon className='mr-2' icon={faChevronRight} />A propos</a>
                        <a className='mx-4' href='#services'><FontAwesomeIcon className='mr-2' icon={faChevronRight} />Services</a>
                    </nav>
                </div>
                <div className='my-8'>
                    <h5 className='text-sm font-bold mb-4 uppercase'>Réseaux sociaux</h5>
                    <div className='flex justify-evenly items-center'>
                            <FontAwesomeIcon className='text-xl' icon={faFacebook} />
                            <FontAwesomeIcon className='text-xl' icon={faTwitter} />
                            <FontAwesomeIcon className='text-xl' icon={faYoutube} />
                            <FontAwesomeIcon className='text-xl' icon={faLinkedin} />
                    </div>
                </div>
            </div>
           <p className='text-center'>&copy; Copyright {new Date(Date.now()).getFullYear()} - Tous droits réservés</p>
        </footer>
    );
};

export default Footer;
