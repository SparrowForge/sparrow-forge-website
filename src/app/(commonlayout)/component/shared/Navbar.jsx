'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { TfiMenuAlt } from "react-icons/tfi";
import SparrowLogo from './SparrowLogo';
import Link from 'next/link';

// const menuItems = [
//     { name: 'Home', href: '/' },
//     { name: 'Service', href: '/service' },
//     { name: 'About us', href: '/about' },
//     { name: 'Development Teams', href: '/teams' },
//     { name: 'Career', href: '/career' },
//     { name: 'Blog', href: '/blog' },
// ];

const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Service', href: '/#service' },
    { name: 'About us', href: '/#about' },
    { name: 'Development Teams', href: '/#teams' },
    { name: 'Career', href: '/#career' },
    { name: 'Blog', href: '/#blog' },
];

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <div className="relative bg-gray font-urbanist mx-auto flex items-center justify-between my-4 md:w-[968px] h-[64px] rounded-full px-6">

                <SparrowLogo />
                {/* desktop start */}

                <ul className="hidden md:flex gap-6 text-[16px] text-navtext line-clamp-1">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <a href={item.href} className="hover:text-lightblue transition">
                                {item.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <Link href="contactus">
                    <button className="hidden md:flex items-center gap-2 px-4 py-2 border border-lightblue text-lightblue text-[16px] rounded-full hover:bg-lightblue-50 transition">
                        Contact us <Image src="/Phone.svg" alt="Phone" width={12} height={12} />
                    </button>
                </Link>
                {/* desktop end */}

                {/*  Mobile start*/}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <RxCross2 size={24} /> : <TfiMenuAlt size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Slide Menu */}
            <div
                className={`fixed top-[86px] right-2 rounded-2xl  w-1/2 max-w-xs bg-gray shadow-lg p-6 z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                    } md:hidden`}
            >
                {/* <div className="flex justify-end mb-4">
                    <button onClick={() => setMenuOpen(false)}>
                        <RxCross2 size={24} />
                    </button>
                </div> */}


                <ul className="flex flex-col gap-4 text-[16px] text-navtext">
                    {menuItems.map((item) => (
                        <li key={item.name}>
                            <a
                                href={item.href}
                                onClick={() => setMenuOpen(false)}
                                className="block hover:text-lightblue transition"
                            >
                                {item.name}
                            </a>
                        </li>
                    ))}
                    <li>
                        <Link href="contactus">
                            <button className="w-full flex items-center justify-center gap-1 px-4 py-2 border border-lightblue text-lightblue text-[16px] rounded-full hover:bg-lightblue-50 transition">
                                Contact us <Image src="/Phone.svg" alt="Phone" width={18} height={18} />
                            </button>
                        </Link>
                    </li>
                </ul>
            </div>
            {/*  Mobile end*/}
        </>
    );
};

export default Navbar;
