import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-red-700  text-white py-10 px-4 md:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Logo/Description Section */}
        <div className="text-center mb-6">
          <h3 className="text-3xl font-bold">PUCP - Programming Club of PU</h3>
          <p className="text-lg mt-2">Empowering students through coding, contests, and collaborations.</p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-200">Home</a></li>
              <li><a href="#" className="hover:text-gray-200">Ranking</a></li>
              <li><a href="#" className="hover:text-gray-200">Contests</a></li>
              <li><a href="#" className="hover:text-gray-200">Preparation</a></li>
              <li><a href="#" className="hover:text-gray-200">Classes</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>Email: info@pucp.com</li>
              <li>Phone: +880123456789</li>
              <li>Address: University Road, Dhaka, Bangladesh</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-gray-200">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                <FaLinkedinIn size={20} />
              </a>
              <a href="#" className="text-white hover:text-gray-200">
                <FaGithub size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">About</h4>
            <p className="text-sm">
              PUCP is a student-driven programming club at the Presidency University of Dhaka, focused on helping students excel in competitive programming, hosting regular coding contests, and providing resources for contest preparation.
            </p>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-sm mt-8">
          <p>&copy; 2025 PUCP - All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
