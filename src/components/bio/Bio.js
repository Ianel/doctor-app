import { faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import doctorPortrait from '../../assets/images/med02.jpg';

const Bio = () => {
  return (
        <div className='bg-slate-200'>
            <div className='p-5'>
                <h2 className='mt-6 lg:mt-16 text-2xl text-[#516191] font-bold lg:text-6xl'>Camille Kelly</h2>
                <p className='my-5 lg:text-xl lg:w-96 lg:my-16'>A gynecologist is a doctor who specializes in female reproductive health system.</p>
                <img className='rounded-md mb-5 lg:w-1/4' src={doctorPortrait} alt="Doctor" />
                <div className='leading-8'>
                    <h3 className='text-[#516191] text-xl pl-6 font-bold'>Camille Kelly</h3>
                    <p className='pl-6 uppercase text-[#516191] font-light'>Family medicine / Room 223</p>
                    <FontAwesomeIcon className='ml-6 mr-3 text-[#516191] font-bold' icon={faPhoneAlt} />
                    <span className='text-[#516191] font-bold'>+261 32 00 554 01</span>
                    <div className='pl-6'>
                        <FontAwesomeIcon className='text-pink-600 text-3xl m-4 ' icon={faFacebook} />
                        <FontAwesomeIcon className='text-pink-600 text-3xl m-4 ' icon={faLinkedin} />
                        <FontAwesomeIcon className='text-pink-600 text-3xl m-4 ' icon={faYoutube} />
                    </div>
                    <button className='ml-6 bg-pink-600 rounded-3xl text-white p-2 px-4'>Prendre rendez-vous <FontAwesomeIcon className='ml-2' icon={faChevronRight} /></button>
                </div>
            </div>
        </div>
    );
};

export default Bio;
