import React from 'react';
import footImgSec from '../assets/footImgSec-removebg-preview.png';
import footImg from '../assets/footImg.jpg';

const Footer = () => {
  return (
    <div className="relative w-full h-full">
      <div className="relative">
        {/* Background Image */}
        <img
          src={footImg}
          alt="Background"
          className="w-full h-[600px] md:h-[900px] object-cover rotate-0 md:-rotate-[90deg]"
        />
        
        {/* Overlay Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Stay Connected</h2>
          <p className="text-base md:text-lg mb-6 text-center">Subscribe to our newsletter for updates.</p>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full md:w-auto items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-lg text-gray-700 w-full md:w-auto"
            />
            <button className="bg-blue-500 px-6 py-2 rounded-lg font-bold text-white hover:bg-blue-600 shadow-lg w-full md:w-auto">
              Subscribe
            </button>
          </div>

          <div className="mt-6 text-center">
            <p>Follow us on:</p>
            <div className="flex space-x-4 mt-2 justify-center">
              <a href="#" className="text-2xl">📘</a>
              <a href="#" className="text-2xl">📷</a>
              <a href="#" className="text-2xl">🐦</a>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Image Section */}
      <img src={footImgSec} alt="Secondary" className="w-full object-contain mt-8" />
    </div>
  );
};

export default Footer;
