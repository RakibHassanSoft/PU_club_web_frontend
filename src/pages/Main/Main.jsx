import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../../compoents/Navbar/Navbar';
import Footer from '../../compoents/Footer/Footer';
import { FaWhatsapp } from 'react-icons/fa';  // Import WhatsApp icon

const Main = () => {
  const [showWhatsapp, setShowWhatsapp] = useState(false);
  const whatsappNumber = '11234567890'; // Your WhatsApp number

  const handleToggleWhatsapp = () => {
    setShowWhatsapp((prev) => !prev);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />

      {/* Chat Option Component (Defined inside Main.js) */}
      <div className="fixed bottom-1 right-1 lg:bottom-8 lg:right-8 flex flex-col items-center space-y-3">
        {/* Text Option */}
        <button
          onClick={handleToggleWhatsapp}
          className="p-3 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition duration-300"
        >
          Chat with us
        </button>

        {/* WhatsApp Icon - Appears only when text option is clicked */}
        {showWhatsapp && (
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300"
          >
            <FaWhatsapp size={24} />
          </a>
        )}
      </div>
    </div>
  );
};

export default Main;
