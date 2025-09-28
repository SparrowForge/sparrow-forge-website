import React from 'react';
import ScrollToTop from '../shared/ScrollToTop';
import ScrollLanguage from '../shared/ScrollLanguage';
import GetInTouchContact from '../ContactPage/GetInTouchContact/GetInTouchContact';
import ContactForm from '../ContactPage/ContactForm/ContactForm';
import FrequentlyAQ from '../ContactPage/FrequentlyAQ/FrequentlyAQ';


const Contact = () => {
    return (
        <div>
           <div className="bg-lightblue/10 text-deepblue p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 items-stretch gap-4 lg:gap-10 rounded-[28px] md:rounded-[38px] mt-4 w-full">
               <GetInTouchContact/>
                <ContactForm />
            </div>
            <FrequentlyAQ />
            <ScrollLanguage />
            <ScrollToTop />
        </div>

    );
};

export default Contact;