// components/Navbar.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navLinks, navLinks2 } from "./navLinks";
import { FaBars, FaTimes } from "react-icons/fa";
import puLogo from "../../../public/image/pucp.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const navigate = useNavigate();
  const user = false;
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src="https://res.cloudinary.com/dvdyfyryz/image/upload/v1745007134/pucp_kboqkp.png"
            alt="logo"
            className="h-[4rem] w-full"
          />
          {/* <h1 className="font-bold  text-lg"></h1> */}
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-2 items-center">
          {navLinks.map((link, i) => (
            <li
              key={i}
              className="relative group cursor-pointer text-md font-medium   border-2 border-transparent rounded-md transition duration-300 ease-in-out hover:border-red-500 active:scale-95 hover:text-white hover:bg-red-600 text-black"
              onMouseEnter={() => setDropdown(link.dropdown ? link.name : null)}
              onMouseLeave={() => setDropdown(null)}
            >
              {/* Shine effect only inside label span */}
              <div className="relative overflow-hidden">
                <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r  from-transparent via-red-300 to-transparent opacity-50 group-hover:left-full transition-all duration-700 ease-in-out pointer-events-none "></span>

                {link.path ? (
                  <span
                    className="relative z-10 px-4 text-md"
                    onClick={() => navigate(link.path)}
                  >
                    {link.name}
                  </span>
                ) : (
                  <span className="relative z-10 px-4 text-md">
                    {link.name}
                  </span>
                )}
              </div>

              {/* Dropdown */}
              {link.dropdown && dropdown === link.name && (
                <div className="absolute left-0  top-full mt-2 bg-red-600 shadow-lg rounded-md w-40 z-10 hover:text-white">
                  {link.dropdown.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => navigate(item.path)}
                      className="relative group"
                    >
                      {/* Gradient background */}
                      <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-red-300 to-transparent opacity-0 group-hover:opacity-50 transition-all duration-700 ease-in-out pointer-events-none"></span>
                      {/* Dropdown Item */}
                      <div className="px-4 py-2 hover:bg-white hover:text-red-600 text-sm cursor-pointer relative z-10">
                        {item.name}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Right side buttons */}
        {user ? (
          <div className="hidden md:flex items-center gap-4 relative">
            {/* Profile Image */}
            <div className="relative">
              <img
                src="https://i.pravatar.cc/40"
                alt="profile"
                className="h-10 w-10 rounded-full border cursor-pointer"
                onClick={() => setProfileDropdown(!profileDropdown)}
              />

              {/* Dropdown Menu */}
              {profileDropdown && (
                <ul className="absolute right-0 mt-2 bg-white shadow-lg rounded-md w-40 z-10">
                  {/* Dropdown Option: My Learnings */}
                  <li
                    key={1}
                    className="relative group cursor-pointer text-md font-medium border-2 border-transparent rounded-md transition duration-300 ease-in-out hover:border-red-600 active:scale-95 hover:text-white hover:bg-red-600 text-white"
                  >
                    {/* Shine effect inside label span */}
                    <div className="relative overflow-hidden">
                      <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-red-300 to-transparent opacity-50 group-hover:left-full transition-all duration-700 ease-in-out pointer-events-none"></span>

                      {/* My Learnings Button inside the dropdown */}
                      <span
                        className="relative z-10 px-6 py-2 text-black hover:text-white font-semibold rounded-md transition duration-300 ease-in-out "
                        onClick={() => navigate("/my-learnings")}
                      >
                        My Learnings
                      </span>
                    </div>
                  </li>
                  {/* Dropdown Option: My Learnings */}
                  <li
                    key={1}
                    className="relative group cursor-pointer text-md font-medium border-2 border-transparent rounded-md transition duration-300 ease-in-out hover:border-red-600 active:scale-95 hover:text-white hover:bg-red-600 text-black"
                  >
                    {/* Shine effect inside label span */}
                    <div className="relative overflow-hidden">
                      <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-red-300 to-transparent opacity-50 group-hover:left-full transition-all duration-700 ease-in-out pointer-events-none"></span>

                      {/* My Learnings Button inside the dropdown */}
                      <span
                        className="relative z-10 px-6 py-2 text-black hover:text-white font-semibold rounded-md transition duration-300 ease-in-out "
                        onClick={() => navigate("/")}
                      >
                        Logout
                      </span>
                    </div>
                  </li>
                </ul>
              )}
            </div>
          </div>
        ) : (
          <ul className="hidden md:flex gap-6 items-center">
            {navLinks2.map((link, i) => (
              <li
                key={i}
                className="relative group cursor-pointer text-md font-medium border-2 border-transparent rounded-md transition duration-300 ease-in-out hover:border-red-500 active:scale-95 hover:text-white hover:bg-red-600 text-black"
                onMouseEnter={() =>
                  setDropdown(link.dropdown ? link.name : null)
                }
                onMouseLeave={() => setDropdown(null)}
              >
                <div className="relative overflow-hidden">
                  <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-red-300 to-transparent opacity-50 group-hover:left-full transition-all duration-700 ease-in-out pointer-events-none"></span>

                  {link.path ? (
                    <span
                      className="relative z-10 px-4 text-md"
                      onClick={() => navigate(link.path)}
                    >
                      {link.name}
                    </span>
                  ) : (
                    <span className="relative z-10 px-4 text-md">
                      {link.name}
                    </span>
                  )}
                </div>

                {/* Optional Dropdown if navLinks2 supports it */}
                {link.dropdown && dropdown === link.name && (
                  <div className="absolute left-0 top-full mt-2 bg-red-600 shadow-lg rounded-md w-40 z-10 hover:text-white">
                    {link.dropdown.map((item, idx) => (
                      <div
                        key={idx}
                        onClick={() => navigate(item.path)}
                        className="relative group"
                      >
                        <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-red-300 to-transparent opacity-0 group-hover:opacity-50 transition-all duration-700 ease-in-out pointer-events-none"></span>
                        <div className="px-4 py-2 hover:bg-white hover:text-red-600 text-sm cursor-pointer relative z-10">
                          {item.name}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <FaTimes size={22} /> : <FaBars size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="flex flex-col gap-3">
            {navLinks.map((link, i) => (
              <div key={i}>
                <li
                  className="font-medium text-sm relative px-2 py-1 overflow-hidden cursor-pointer border-l-4 border-transparent hover:border-red-500  transition-all duration-300 group"
                  onClick={() => {
                    if (link.path) {
                      navigate(link.path);
                      setIsOpen(false);
                    }
                  }}
                >
                  <span className="relative z-10 group-hover:text-red-500 transition-colors duration-300">
                    {link.name}
                  </span>
                  {/* Add shimmer effect on hover */}
                  <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-transparent via-red-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
                </li>

                {/* Dropdown Items */}
                {link.dropdown &&
                  link.dropdown.map((item, idx) => (
                    <li
                      key={idx}
                      className="pl-4 text-sm text-red-500 cursor-pointer hover:underline  hover:text-red-600 relative group"
                      onClick={() => {
                        navigate(item.path);
                        setIsOpen(false);
                      }}
                    >
                      <span className="relative z-10  transition-colors duration-300">
                        • {item.name}
                      </span>
                      <span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-transparent via-red-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
                    </li>
                  ))}
              </div>
            ))}

            {/* Profile Button */}
            <li>
              {user ? (
                <Link to="profile">
                  <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700 transition">
                    Profile
                  </button>
                </Link>
              ) : (
                <Link to="profile">
                  <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-md w-full hover:bg-blue-700 transition">
                    Profile
                  </button>
                </Link>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
