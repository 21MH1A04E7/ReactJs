import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left Section */}
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <p className="m-0 text-gray-400">© 2022 Your Website. All rights reserved.</p>
          </div>

          {/* Right Section */}
          <div>
            <ul className="flex space-x-6 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">Privacy</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">Terms</a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors duration-200">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
