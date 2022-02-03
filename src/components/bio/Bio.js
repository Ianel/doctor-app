import { faFacebook, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faChevronRight, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import doctorPortrait from '../../assets/images/med02.jpg';

const Bio = () => {
  return (
        <div id="bio" className='lg:px-10 bg-slate-200 flex flex-col items-center justify-center lg:items-center lg:flex-row'>
            <div className='p-5 lg:w-1/2'>
                <h2 className='mt-6 lg:mt-24 text-2xl text-[#516191] font-bold lg:text-6xl'>Camille Kelly</h2>
                <p className='my-5 lg:text-xl lg:w-96 lg:my-16'>A gynecologist is a doctor who specializes in female reproductive health system.</p>
                <img className='rounded-md mb-5' src={doctorPortrait} alt="Doctor" />
                <div className='leading-8'>
                    <h3 className='text-[#516191] text-xl pl-6 font-bold'>Camille Kelly</h3>
                    <p className='pl-6 uppercase text-[#516191] font-light'>Family medicine / Room 223</p>
                    <FontAwesomeIcon className='ml-6 mr-3 text-[#516191] font-bold' icon={faPhoneAlt} />
                    <span className='text-[#516191] font-bold'>+261 32 00 550 01</span>
                    <div className='pl-6'>
                        <FontAwesomeIcon className='text-pink-600 text-3xl m-4 ' icon={faFacebook} />
                        <FontAwesomeIcon className='text-pink-600 text-3xl m-4 ' icon={faLinkedin} />
                        <FontAwesomeIcon className='text-pink-600 text-3xl m-4 ' icon={faYoutube} />
                    </div>
                    <a href='#rdv' className='ml-6 bg-pink-600 rounded-3xl text-white p-2 px-4'>Prendre rendez-vous <FontAwesomeIcon className='ml-2' icon={faChevronRight} /></a>
                </div>
            </div>
            <div className='p-10'>
                <p className='text-justify'>A physician/doctor in the functions and diseases specific to women and girls, especially those affecting the reproductive system. Also known as Gynecology, these doctors collaborate with nurses, X-ray technicians, medical assistants, 
                    and other doctors (such as emergency room doctors and surgeons) for treatments.</p><br/>
                <p className='text-justify'>Dr. Denman is certified by the American Board in Internal Medicine and in hematology and medical Gynecology. He currently serves as a consultant in medical Gynecology at Medicenter Hospital and as the program director for the National Healthcare Group Medical
                    Oncology Residency Program, which is run in collaboration with Medicenter Hospital.</p><br/>
                <p className='text-justify'>Nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel euiriure dolor in hendrerit in vulputate velit esse molestie consequat,
                    vel illum dolore eu feugiat nulla facilisis at ver eros et accumsan et.</p>
            </div>
        </div>
    );
};

export default Bio;
