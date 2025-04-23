import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-24 px-6 text-center shadow-md relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30"></div>
      
      <h1 className="text-5xl font-extrabold mb-6 uppercase tracking-wide relative z-10" data-aos="fade-up">
        Presidency University Problem Solving Club
      </h1>

      <p className="text-xl max-w-2xl mx-auto relative z-10 mb-8" data-aos="fade-up" data-aos-delay="200">
        Empowering students through competitive programming, contests, and community. Join us !
      </p>

      <div className="relative z-10">
        <a
          href="#join-us"
          className="text-lg font-semibold px-6 py-3 bg-white text-red-600 rounded-full hover:bg-red-600 hover:text-white transition duration-300 transform hover:scale-105"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          Join the Club
        </a>
      </div>

      {/* Background Animation (Floating Circles) */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 opacity-20 animate-pulse">
        <svg className="w-64 h-64 text-red-200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="8" fill="none"></circle>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
