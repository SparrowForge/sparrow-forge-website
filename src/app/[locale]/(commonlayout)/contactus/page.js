import React from 'react';
import ScrollToTop from '../shared/ScrollToTop';
import ScrollLanguage from '../shared/ScrollLanguage';
import GetInTouchContact from '../ContactPage/GetInTouchContact/GetInTouchContact';
import ContactForm from '../ContactPage/ContactForm/ContactForm';
import FrequentlyAQ from '../ContactPage/FrequentlyAQ/FrequentlyAQ';


const Contact = () => {
    return (
        <div>
            <div className="bg-lightblue/10 text-deepblue p-4 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-10 mx-4 rounded-[38px]">
                <div className='w-full md:w-1/2'>
                    <GetInTouchContact />
                </div>
                <div className='w-full md:w-1/2'>
                    <ContactForm />
                </div>

            </div>
            <FrequentlyAQ/>
            <ScrollLanguage/>
            <ScrollToTop/>
        </div>

    );
};

export default Contact;