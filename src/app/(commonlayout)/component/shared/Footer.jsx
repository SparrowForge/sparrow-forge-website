"use client"
import React from 'react';
import FooterAboveCard from '../homepage/FooterAboveCard';

import Logo from '../../../../../public/logo.svg';
import fbIcon from '../../../../../public/socialicons/fb.svg';
import inIcon from '../../../../../public/socialicons/in.svg';
import twIcon from '../../../../../public/socialicons/tw.svg';
import instraIcon from '../../../../../public/socialicons/instra.svg';
import wpIcon from '../../../../../public/socialicons/wp.svg';


import gmailIcon from '../../../../../public/socialicons/gmail.svg';
import phoneIcon from '../../../../../public/socialicons/phone.svg';
import companyIcon from '../../../../../public/socialicons/company.svg';
import Image from 'next/image';
import SparrowLogo from './SparrowLogo';

const footerData = {
    company: {
        logo: Logo,
        name: 'Sparrow Forge',
        description:
            'Sparrow Forge Ltd. is a creative software agency specializing in custom software, web and mobile app development, and IT solutions.',
    },
    quickLinks: [
        { label: 'Home', href: '/' },
        { label: 'About Us', href: '/about' },
        { label: 'Services', href: '/services' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Our Mission', href: '/mission' },
        { label: 'Blog', href: '/blog' },
        { label: 'Testimonials', href: '/testimonials' },
    ],
    services: [
        { label: 'Web Design & Development', href: '/services/web-development' },
        { label: 'UI/UX Design', href: '/services/ui-ux' },
        { label: 'Mobile App Design', href: '/services/mobile-app' },
        { label: 'Branding', href: '/services/branding' },
        { label: 'IT Consulting & Support', href: '/services/it-consulting' },
    ],
    socialMedia: [
        { icon: fbIcon, name: 'Facebook', href: "#" },
        { icon: inIcon, name: 'LinkedIn', href: "#" },
        { icon: twIcon, name: 'Twitter (X)', href: "#" },
        { icon: instraIcon, name: 'Instagram', href: "#" },
        { icon: wpIcon, name: 'WhatsApp', href: "#" },
    ],
    contact: [
        {
            icon: gmailIcon,
            text: 'hello@sparrowforge.com',
            href: "#",

        },
        {
            icon: phoneIcon,
            text: '+123 456 7890',
            href: "#",
        },
        {
            icon: companyIcon,
            text: '577 Innovation Drive, Tech Valley Park, San Francisco, CA 94107, USA',
            href: "#",
        },
    ],
};

const Footer = () => {
    return (
        <div className='relative bg-footer text-white w-full pt-52 pb-10'>
            {/* Floating Above Card */}
            <div className='flex justify-center items-center absolute z-50 -top-20 md:-top-52 left-0 right-0 mx-10'>
                <FooterAboveCard />
            </div>

            {/* Footer Content */}
            <div className=' mx-10 px-6 grid grid-cols-1 md:grid-cols-5  gap-10 md:gap-4 text-center md:text-start'>
                {/* Company Info */}
                <div className='space-y-4 '>
                    <div className='flex justify-center md:justify-start'>
                        <SparrowLogo />
                    </div>
                    <p className='text-sm text-[#FFFFFF]/48 max-w-xs leading-6'>{footerData.company.description}</p>
                </div>

                {/* Quick Links */}
                <div className='md:ml-16'>
                    <h3 className='font-semibold text-md mb-2'>Quick Links</h3>
                    <ul className='space-y-1 text-sm text-[#FFFFFF]/48'>
                        {footerData.quickLinks.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className='hover:text-orange-400 cursor-pointer'>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className='font-semibold text-md mb-2'>Services</h3>
                    <ul className='space-y-1 text-sm text-[#FFFFFF]/48'>
                        {footerData.services.map((item, index) => (
                            <li key={index}>
                                <a href={item.href} className='hover:text-orange-400 cursor-pointer'>
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Follow Us */}
                <div>
                    <h3 className='font-semibold text-md mb-2'>Follow Us</h3>
                    <ul className='space-y-2 text-sm text-[#FFFFFF]/48'>
                        {footerData.socialMedia.map((item, index) => (
                            <li key={index} >
                                <a href={item.href} className='flex items-center gap-2 hover:text-orange cursor-pointer'>
                                    <Image src={item.icon} alt={item.name} width={18} height={18} className='h-auto w-auto' />
                                {item.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h3 className='font-semibold text-md mb-2'>Get in Touch</h3>
                    <ul className='space-y-2 text-sm text-[#FFFFFF]/48'>
                        {footerData.contact.map((item, index) => (
                            <li key={index} className='flex items-start gap-2'>
                                <a href={item.href} className='flex items-center gap-2 hover:text-orange cursor-pointer'>
                                    <span className='mt-1'>
                                        <Image src={item.icon} alt={item.text} width={16} height={16} className='h-auto w-auto' />
                                    </span>
                                    <span>{item.text}</span>
                                </a>

                            </li>
                        ))}
                    </ul>
                </div>

            </div>
            {/* Bottom Bar */}
            <div className='border-t border-[#FFFFFF]/14 mt-12 pt-6  px-6 mx-auto text-sm  items-center text-[#FFFFFF]/48'>
                <div className='flex flex-col md:flex-row justify-between md:mx-10'>
                    <p>© 2025 Sparrow Forge Ltd. All rights reserved.</p>
                    <div className='flex gap-4 mt-2 md:mt-0'>
                        <a href='/privacyPolicy' className='hover:text-orange'>
                            Privacy policy
                        </a>
                        <a href='/termsOfService' className='hover:text-orange'>
                            Terms of service
                        </a>
                    </div>
                </div>


            </div>
        </div >
    );
};

export default Footer;
