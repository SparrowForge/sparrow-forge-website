import React from 'react';
import ContactForm from '../component/contactPage/ContactForm';
import GetInTouchContact from '../component/contactPage/GetInTouchContact';
import FrequentlyAQ from '../component/contactPage/FrequentlyAQ';
import ScrollToTop from '../component/shared/ScrollToTop';

const Contact = () => {
    return (
        <div>
            <div className="bg-gray p-4 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-10 mx-4 rounded-[38px]">
                <div className='w-full md:w-1/2'>
                    <GetInTouchContact />
                </div>
                <div className='w-full md:w-1/2'>
                    <ContactForm />
                </div>

            </div>
            <FrequentlyAQ/>
            <ScrollToTop/>
        </div>

    );
};

export default Contact;