import React from 'react';
import Button from '../shared/Button';

const FooterAboveCard = () => {
    return (
        <div className='w-[1028px] h-[372px] flex flex-col justify-center items-center gap-[32px] rounded-[56px] bg-orange text-white px-40 text-center '>
             <h1 className='text-[44px]'>Turn Ideas Into Impact</h1>
            <p className='text-[20px]'>Every successful product starts with a powerful idea — and we’re here to turn yours into something real.</p>
          
            <button className='border border-white p-1 rounded-full animation-zoom-out-hover'>
                <Button 
                image="/buttonarrow.svg" 
                title="Click Me" 
                className="bg-white text-orange   px-4 py-1 rounded-full " />
            </button>


        </div>
    );
};

export default FooterAboveCard;