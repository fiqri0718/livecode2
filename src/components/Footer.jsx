import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-[#2E51A2] text-white p-4 mt-auto'>
      <p className='text-center text-sm'>&copy; {new Date().getFullYear()} Ruang Anime. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
