'use client';
import React from 'react';
import Image from 'next/image';

const locations = [
  {
    id: 1,
    top: '20%',
    left: '20%',
    title: 'New York',
    image: '/map/1.jpg',
    description: 'Our New York office drives map across the Americas.'
  },
  {
    id: 2,
    top: '10%',
    left: '36%',
    title: 'London',
    image: '/map/1.jpg',
    description: 'Our London office leads European operations with excellence.'
  },
  {
    id: 3,
    top: '25%',
    left: '69%',
    title: 'Tokyo',
    image: '/map/1.jpg',
    description: 'Tokyo office focuses on cutting-edge technology and partnerships.'
  },
  {
    id: 4,
    top: '42%',
    left: '68%',
    title: 'Dubai',
    image: '/map/1.jpg',
    description: 'Our Dubai office is the central hub overseeing global operations.'
  },
  {
    id: 5,
    top: '68%',
    left: '52%',
    title: 'Sydney',
    image: '/map/1.jpg',
    description: 'Sydney team focuses on Asia-Pacific market expansion and growth.'
  },
  {
    id: 6,
    top: '35%',
    left: '23%',
    title: 'Cape Town',
    image: '/map/1.jpg',
    description: 'Cape Town team manages operations in Southern Africa region.'
  }
];

const WorldMapWithLocations = () => {
  const width = 1000;
  const height = 600;

  return (
    <div className="relative w-full h-[200px] md:h-[600px] bg-white flex items-center justify-center overflow-hidden md:mt-10">
      {/* World Map Background */}
      <Image
        src="/map/mapImage.svg"
        alt="World Map"
        fill
        className="object-contain"
      />

      {/* Polygon shape */}
      <jpg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${width} ${height}`}>
        <polygon
          points="60,120 300,50 800,150 780,280 550,460 130,250"
          fill="rgba(33, 100, 248, 0.08)"
          stroke="#2164F8"
          strokeWidth="2"
        />
      </jpg>

      {/* Render markers dynamically */}
      {locations.map((loc) => (
        <div key={loc.id} className="absolute group" style={{ top: loc.top, left: loc.left }}>
          {/* Icon */}
          <div className="w-8 h-8 bg-lightblue rounded-full border-2 border-white flex justify-center items-center cursor-pointer">
            <Image
              src="/map/company.svg"
              alt="World Map"
              width={10}
              height={10}
              className="w-4 h-4"
            />
            {/* <HiOutlineHomeModern className='text-white font-bold text-lg'/> */}
          </div>

          {/* Card (hidden by default, show on hover) */}
          <div className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-lightblue text-white rounded-lg p-4 w-40 shadow-lg opacity-0 group-hover:opacity-100 transition duration-300 z-50">
            <Image
              src={loc.image}
              alt={loc.title}
              width={140}
              height={60}
              className="rounded-md mb-3"
            />
            <h3 className="text-lg font-semibold mb-1">{loc.title}</h3>
            <p className="text-sm">{loc.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorldMapWithLocations;
