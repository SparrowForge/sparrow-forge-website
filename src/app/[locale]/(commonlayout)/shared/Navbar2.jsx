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
  const [menuOpen, setMenuOpen] = useState(false);
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
      <div className="relative bg-deepblue font-manrope flex items-center justify-between my-4 h-[64px] rounded-full p-6 w-full md:w-[1194px] mx-auto">
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
        <div className='flex gap-2'>
          <LanguageButton />
          <Link href="contactus">
            <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-lightblue text-white text-[16px] rounded-full hover:bg-lightblue-50 transition">
              {t(LOCALE_KEYS.CONTACT_US)}{" "}
              <Image src="/shared/Vector.svg" alt="Phone" width={12} height={12} />
            </button>
          </Link>
        </div>


        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <RxCross2 size={24} className="text-white" />
            ) : (
              <TfiMenuAlt size={24} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Slide Menu */}
      <div
        className={`fixed top-[86px] right-2 rounded-2xl w-1/2 max-w-xs bg-deepblue shadow-lg p-6 z-50 transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
      >
        <ul className="flex flex-col gap-4 text-[16px] text-white">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block hover:text-lightblue transition"
              >
                {t(item.name)}
              </a>
            </li>
          ))}
          <li>
            <LanguageButton />
          </li>
          <li>
            <Link href="contactus">
              <button className="w-full flex items-center justify-center gap-1 px-4 py-2 border border-lightblue text-lightblue text-[16px] rounded-full hover:bg-lightblue-50 transition">
                {t(LOCALE_KEYS.CONTACT_US)}{" "}
                <Image src="/Phone.svg" alt="Phone" width={18} height={18} />
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar2;