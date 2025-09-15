'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { TfiMenuAlt } from "react-icons/tfi";
import SparrowLogo from './SparrowLogo';
import Link from 'next/link';
import { useLocalization } from '@/hooks/useLocalization';
import { LOCALE_KEYS } from '@/constants/localizationKeys';

// Define keys for menu and buttons
// Add these keys in your LOCALE_KEYS object
// Example:
// export const LOCALE_KEYS = {
//   WELCOME: "WELCOME",
//   LANGUAGE: "LANGUAGE",
//   HOME: "HOME",
//   SERVICE: "SERVICE",
//   ABOUT_US: "ABOUT_US",
//   TEAMS: "TEAMS",
//   CAREER: "CAREER",
//   BLOG: "BLOG",
//   CONTACT_US: "CONTACT_US",
// };

const Navbar = () => {
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
      <div className="relative font-manrope mx-auto flex items-center justify-between my-4 h-[64px] rounded-full px-6">
        <SparrowLogo />

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 text-[16px] text-white/50 line-clamp-1">
          {menuItems.map((item) => (
            <li key={item.name}>
              <a href={item.href} className="hover:text-lightblue transition">
                {t(item.name)}
              </a>
            </li>
          ))}
        </ul>

        <Link href="contactus">
          <button className="hidden md:flex items-center gap-2 px-4 py-2 bg-lightblue text-white text-[16px] rounded-full hover:bg-lightblue-50 transition">
            {t(LOCALE_KEYS.CONTACT_US)}{" "}
            <Image src="/shared/Vector.svg" alt="Phone" width={12} height={12} />
          </button>
        </Link>

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
        className={`fixed top-[86px] right-2 rounded-2xl w-1/2 max-w-xs bg-deepblue shadow-lg p-6 z-50 transform transition-transform duration-300 ease-in-out ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
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

export default Navbar;
