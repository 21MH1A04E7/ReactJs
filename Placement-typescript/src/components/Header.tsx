import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="text-3xl font-bold">
          <a href="/" className="text-white hover:text-gray-300">Company Logo</a>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-lg">
          <a href="/" className="hover:text-gray-300 transition-colors duration-200">Home</a>
          <a href="/about" className="hover:text-gray-300 transition-colors duration-200">About</a>
          <a href="/services" className="hover:text-gray-300 transition-colors duration-200">Services</a>
          <a href="/contact" className="hover:text-gray-300 transition-colors duration-200">Contact</a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="focus:outline-none text-white">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
