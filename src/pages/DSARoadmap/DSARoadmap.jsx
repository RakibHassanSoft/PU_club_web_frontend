import React, { useState } from "react";
import DSARoadmapCL from "../../compoents/DSARoadmapCI/DSARoadmapCI";
import Level1 from "../../compoents/DSARoadmapL/Level1";
import Level2 from "../../compoents/DSARoadmapL/Level2";
import Level3 from "../../compoents/DSARoadmapL/Level3";
import Level4 from "../../compoents/DSARoadmapL/Level4";

const DSARoadmap = () => {
  const [activeLevel, setActiveLevel] = useState(0);
  const [sidebarVisible, setSidebarVisible] = useState(true); // show by default

  const toggleLevel = (level) => {
    setActiveLevel(level);
    if (window.innerWidth < 768) {
      setSidebarVisible(false); // auto-close sidebar on mobile after selecting
    }
  };

  return (
    <div className="min-h-screen max-w-[200rem] mx-auto flex flex-col md:flex-row justify-center bg-gray-100 relative">
      {/* Sidebar Toggle Button (visible on all screens) */}
      <div className="p-4 flex justify-between items-center bg-green-600 text-white md:hidden md:fixed md:left-0 md:top-0 w-full z-30">
        <h1 className="text-lg font-bold">DSA Roadmap</h1>
        <button
          className="bg-white text-green-600 px-3 py-1 rounded shadow"
          onClick={() => setSidebarVisible(!sidebarVisible)}
        >
          {sidebarVisible ? "Close" : "Menu"}
        </button>
      </div>

      <div className=" md:flex justify-end p-4 bg-green-600 text-white md:w-full md:fixed md:top-0 z-5 ">
        <button
          className="bg-red-600 text-white px-3 py-1 rounded shadow"
          onClick={() => setSidebarVisible(!sidebarVisible)}
        >
          {sidebarVisible ? "Close" : "Menu"}
        </button>
      </div>

      {/* Sidebar */}
      {sidebarVisible && (
        <div className="lg:fixed   w-full md:w-1/6 space-y-4 bg-white p-4 shadow-md md:top-20  left-0 md:h-[42rem] lg:h-[26rem]  overflow-y-auto z-5">
          {["DSA Roadmap", "Level 1", "Level 2", "Level 3", "Level 4"].map(
            (label, index) => (
              <button
                key={index}
                className={`w-full text-left px-6 py-4 text-lg font-semibold ${
                  activeLevel === index
                    ? "bg-red-600 text-white"
                    : "bg-red-500 text-white"
                } rounded-lg relative overflow-hidden`}
                onClick={() => toggleLevel(index)}
              >
                {label}
                <span className="absolute left-0 bottom-0 w-full h-1 bg-red-600 transform translate-x-[-100%] transition-all duration-300 group-hover:translate-x-0"></span>
              </button>
            )
          )}
        </div>
      )}

      {/* Main Content */}
      <div
        className={`w-full ${
          sidebarVisible ? "md:w-2/3" : "md:w-full"
        } p-4 pt-40 md:p-6`}
      >
        {activeLevel === 0 && <DSARoadmapCL />}
        {activeLevel === 1 && <Level1 />}
        {activeLevel === 2 && <Level2 />}
        {activeLevel === 3 && <Level3 />}
        {activeLevel === 4 && <Level4 />}
      </div>
    </div>
  );
};

export default DSARoadmap;
