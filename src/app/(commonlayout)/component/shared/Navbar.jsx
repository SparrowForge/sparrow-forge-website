'use client';

import Image from 'next/image';
import React from 'react';

const menuItems = [
  { name: 'Home', href: '/home' },
  { name: 'Service', href: '/service' },
  { name: 'About us', href: '/about' },
  { name: 'Development Teams', href: '/teams' },
  { name: 'Career', href: '/career' },
  { name: 'Blog', href: '/blog' },
];

const Navbar = () => {
  return (
    <div className="mx-auto my-4 bg-gray w-[968px] h-[64px] flex items-center justify-between rounded-full px-6 font-urbanist">

      <div className="flex items-center gap-2">
        <Image src="/Bird.svg" alt="Logo" width={24} height={24} />
        <span className="font-semibold text-sm">Sparrow Forge</span>
      </div>


      <ul className="flex gap-6 text-[16px] text-navtext line-clamp-1">
        {menuItems.map((item) => (
          <li key={item.name}>
            <a href={item.href} className="hover:text-orange transition">
              {item.name}
            </a>
          </li>
        ))}
      </ul>

  
      <button className="flex items-center gap-1 px-4 py-2 border border-orange text-orange text-sm rounded-full hover:bg-orange-50 transition">
        Contact us  <Image src="/Phone.svg" alt="Logo" width={24} height={24} />
      </button>
    </div>
  );
};

export default Navbar;
