import React from 'react';

const Card = ({ image, mainTitle }) => {
  return (
        <div className='md:w-1/2 lg:w-1/4 p-4 rounded-md my-5 border border-slate-300'>
            <img className='rounded-md' src={image} alt="" />
            <h4 className='my-5 text-center'>{mainTitle}</h4>
        </div>
    );
};

export default Card;
