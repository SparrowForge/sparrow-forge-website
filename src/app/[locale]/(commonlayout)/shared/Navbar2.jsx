'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { TfiMenuAlt } from "react-icons/tfi";
import SparrowLogo from './SparrowLogo';
import Link from 'next/link';
import { useLocalization } from '@/hooks/useLocalization';
import { LOCALE_KEYS } from '@/constants/localizationKeys';
import LanguageButton from './LanguageButton';

const Navbar2 = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { t } = useLocalization();

  const menuItems = [
    { name: LOCALE_KEYS.HOME, href: '/' },
    { name: LOCALE_KEYS.SERVICE, href: '/#service' },
    { name: LOCALE_KEYS.ABOUT_US, href: '/#about' },
    { name: LOCALE_KEYS.TEAMS, href: '/#teams' },
    { name: LOCALE_KEYS.CAREER, href: '/#career' },
    { name: LOCALE_KEYS.BLOG, href: '/#blog' },
  ];

  return (
    <>
      <div className="relative bg-deepblue font-manrope flex items-center justify-between mb-4 md:my-4 h-[64px] md:rounded-full p-6 w-full lg:w-[1194px] mx-auto">
        <SparrowLogo />

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center items-center gap-4 text-[16px] text-white/50 line-clamp-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="hover:text-lightblue transition">
                {t(item.name)}
              </a>
            </li>
          ))}

        </ul>
        <div className='hidden md:flex gap-2'>
          <LanguageButton />
          <Link href="contact-us">
            <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-lightblue text-white text-[16px] rounded-full hover:bg-lightblue-50 transition">
              {t(LOCALE_KEYS.CONTACT_US)}{" "}
              <Image src="/shared/Vector.svg" alt="Phone" width={12} height={12} />
            </button>
          </Link>
        </div>


        {/* Mobile Menu Button */}
        {/* Mobile Menu Button */}
        <div className="flex justify-center items-center md:hidden gap-0">
          <LanguageButton />
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center justify-between w-full px-2 py-2 text-white bg-deepblue/10 rounded-md hover:bg-lightblue transition"
          >
            {dropdownOpen ? (
              <RxCross2 size={24} className="text-white" />
            ) : (
              <TfiMenuAlt size={24} className="text-white" />
            )}

          </button>
        </div>
      </div>


      {/* Dropdown Items */}
      {dropdownOpen && (
        <div className='absolute right-2 md:left-0 w-1/2 bg-deepblue/90 rounded-xl p-4 z-50 md:hidden'>
          <ul className="mt-2 flex flex-col gap-2 text-[16px] text-white">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  onClick={() => {
                    setDropdownOpen(false);
                  }}
                  className="block px-4 py-2 rounded-md hover:bg-lightblue transition"
                >
                  {t(item.name)}
                </a>
              </li>
            ))}
          </ul>
          {/* Contact Button */}
          <div className="md:hidden mt-4">
            <Link href="contact-us">
              <button className="w-full flex items-center justify-center gap-1 px-2 py-2 border border-white text-white hover:text-lightblue text-[16px] rounded-full hover:bg-lightblue-50 transition">
                {t(LOCALE_KEYS.CONTACT_US)}{" "}
                <Image src="/shared/Vector.svg" alt="Phone" width={18} height={18} />
              </button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar2;