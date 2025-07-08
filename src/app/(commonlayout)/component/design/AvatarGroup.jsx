import Image from 'next/image';
import React from 'react';

const avatars = [
  { id: 1, src: '/avatars/1.svg', alt: 'Avatar 1' },
  { id: 2, src: '/avatars/2.svg', alt: 'Avatar 2' },
  { id: 3, src: '/avatars/3.svg', alt: 'Avatar 3' },
];

const AvatarGroup = () => {
  return (
    <div className="flex items-center space-x-[-10px]">
      {avatars.map((avatar) => (
        <div key={avatar.id} className="w-10 h-10 rounded-full ring-2 ring-white overflow-hidden">
          <Image
            src={avatar.src}
            alt={avatar.alt}
            width={40}
            height={40}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
      <div className="w-10 h-10 rounded-full bg-lightblue text-white flex items-center justify-center text-xl font-bold ring-2 ring-white">
        +
      </div>
    </div>
  );
};

export default AvatarGroup;
