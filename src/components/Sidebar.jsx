import React from 'react';
import logo from '../assets/Logo.png';
import sideImage from '../assets/sidebar-img.png';

const Sidebar = () => {
  return (
    <div className="bg-[#0a0a0a] w-full md:w-64 px-6 py-6 flex flex-col border-r border-gray-700">
      <div>
        <img src={logo} alt="Logo" className="h-10 mb-6" />

        <div className="p-[2px] rounded-full bg-gradient-to-r from-green-400 via-yellow-400 via-red-500 via-pink-500 to-blue-500 inline-block">
          <button className="w-full px-6 py-2 rounded-full bg-black text-white hover:bg-white hover:text-black transition">
            CONTACT US
          </button>
        </div>

        <ul className="space-y-4 text-sm text-gray-300 mt-4">
          <li>App Development</li>
          <li>Challenges</li>
          <li>Hire Developer</li>
          <li>Community</li>
        </ul>

        <div className="md:mt-50 mt-6 lg:mt-50">
          <img src={sideImage} alt="Side visual" className="rounded-lg w-full mb-2" />
          <p className="text-xs text-gray-400">
            Lorem ipsum dolor sit amet consectetur. Enim tempor posuere rutrum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
