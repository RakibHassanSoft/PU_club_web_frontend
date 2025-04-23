import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'First Name, Last Name',
    role: 'Non-executive Director',
    description: 'This is a sample text. You simply add your own text and description here.',
    imgUrl: 'https://via.placeholder.com/150', // Replace with real image URLs
    bgColor: 'bg-teal-500',
  },
  {
    name: 'First Name, Last Name',
    role: 'Non-executive Director',
    description: 'This is a sample text. You simply add your own text and description here.',
    imgUrl: 'https://via.placeholder.com/150',
    bgColor: 'bg-teal-500',
  },
  {
    name: 'First Name, Last Name',
    role: 'Non-executive Director',
    description: 'This is a sample text. You simply add your own text and description here.',
    imgUrl: 'https://via.placeholder.com/150',
    bgColor: 'bg-teal-500',
  },
  {
    name: 'First Name, Last Name',
    role: 'Non-executive Director',
    description: 'This is a sample text. You simply add your own text and description here.',
    imgUrl: 'https://via.placeholder.com/150',
    bgColor: 'bg-teal-500',
  },
];

const OurMentors = () => {
  return (
    <div className="py-10 max-w-7xl  m-auto px-4 md:px-20 b">
      <h2 className="text-4xl font-semibold text-center mb-2 text-red-600">Meet Our Team</h2>
      <p className="text-center text-gray-600 mb-10">Here’s a brief introduction to the experienced mentors who guide us</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex items-center bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl">
            <div className="w-1/2 p-6 flex justify-center">
              <img
                src={member.imgUrl}
                alt={member.name}
                className="w-36 h-36 rounded-full object-cover border-4 border-white shadow-md"
              />
            </div>
            <div className={`${member.bgColor} text-white p-6 flex-1`}>
              <h3 className="text-xl font-bold">{member.name}</h3>
              <p className="italic text-sm mb-3">{member.role}</p>
              <p className="text-sm mb-4">{member.description}</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-gray-300"><FaFacebookF size={20} /></a>
                <a href="#" className="hover:text-gray-300"><FaTwitter size={20} /></a>
                <a href="#" className="hover:text-gray-300"><FaLinkedinIn size={20} /></a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurMentors;
