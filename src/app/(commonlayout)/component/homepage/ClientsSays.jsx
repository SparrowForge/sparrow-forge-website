import React from 'react';
import ClientsSaysHeader from '../design/ClientsSaysHeader';
import ClientsSaysSlider from '../design/ClientsSaysSlider';

const ClientsSays = () => {
    return (
        <div className='bg-lightblue/10 w-full'>
            <div className="md:w-[1194px] mx-auto flex flex-col items-start">
                <ClientsSaysHeader />
                <ClientsSaysSlider/>
            </div>
        </div>
    );
};

export default ClientsSays;