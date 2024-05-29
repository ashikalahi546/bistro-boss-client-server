import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className='mb-8'>
            <p className='text-orange-500 text-xl'>{heading}</p>
            <h3 className='uppercase font-medium text-gray-500'>{subHeading}</h3>
        </div>
    );
};

export default SectionTitle;