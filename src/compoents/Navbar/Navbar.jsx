// components/Navbar.jsx
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navLinks, navLinks2 } from "./navLinks";
import { FaBars, FaTimes } from "react-icons/fa";
import puLogo from "../../../public/image/pucp.png";
import useAuth from "../../hook/useAuth";
import Swal from "sweetalert2";
import useUser from "../../hook/useUser";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [profileDropdown, setProfileDropdown] = useState(false);
  const navigate = useNavigate();

  const { isAdmin, loading, error ,refetch } = useUser();
  // console.log(isAdmin)

  const user = useAuth();
  

  const sessionEmail = sessionStorage.getItem("userEmail");
  const isLoggedIn = sessionEmail !== null && sessionEmail !== undefined;

  const handleLogout = async () => {
    sessionStorage.removeItem("userEmail");
    // Optional: reset admin state immediately
    Swal.fire(
      "Logged Out",
      "You have been logged out successfully.",
      "success"
    );
    setTimeout(() => {
      navigate("/signin");
    }, 1000);
  };

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
                <div className="absolute left-0  top-full mt-1 bg-red-600 shadow-lg rounded-md w-40 z-10 hover:text-white">
                  {link.dropdown.map((item, idx) => (
                    <div
                      key={idx}
                      onClick={() => navigate(item.path)}
                      className="relative group"
                    >
                      {/* Gradient background */}
                      <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-red-300 to-transparent opacity-0 group-hover:opacity-50 transition-all duration-700 ease-in-out pointer-events-none"></span>
                      {/* Dropdown Item */}
                      <div className="px-4 py-2 hover:bg-white hover:text-red-600 text-lg cursor-pointer relative z-10">
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
        {isLoggedIn !== false ? (
          <div className="hidden md:flex items-center gap-4 relative">
            {/* Profile Image */}
            <div className="relative">
              <img
                src="https://www.pngarts.com/files/11/Avatar-Transparent-Images.png"
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
                        onClick={() => {
                          setProfileDropdown(!profileDropdown); // Toggle dropdown state
                          navigate("/my-learnings"); // Navigate to "/my-learnings"
                        }}
                      >
                        My Learnings
                      </span>
                    </div>
                  </li>
                  {isAdmin && (
                    <li
                      key={2}
                      className="relative group cursor-pointer text-md font-medium border-2 border-transparent rounded-md transition duration-300 ease-in-out hover:border-red-600 active:scale-95 hover:text-white hover:bg-red-600 text-black"
                    >
                      {/* Shine effect inside label span */}
                      <div className="relative overflow-hidden">
                        <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-red-300 to-transparent opacity-50 group-hover:left-full transition-all duration-700 ease-in-out pointer-events-none"></span>

                        {/* My Learnings Button inside the dropdown */}
                        <span
                          className="relative z-10 px-6 py-2 text-black hover:text-white font-semibold rounded-md transition duration-300 ease-in-out "
                          onClick={() => {
                            setProfileDropdown(!profileDropdown);
                            navigate("/handle-users"); // Redirect to homepage
                          }}
                        >
                          Handle Users
                        </span>
                      </div>
                    </li>
                  )}
                  {loading && (
                    <li
                      key={4}
                      className="relative group cursor-pointer text-md font-medium border-2 border-transparent rounded-md transition duration-300 ease-in-out hover:border-red-600 active:scale-95 hover:text-white hover:bg-red-600 text-black"
                    >
                      {/* Shine effect inside label span */}
                      <div className="relative overflow-hidden">
                        <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-red-300 to-transparent opacity-50 group-hover:left-full transition-all duration-700 ease-in-out pointer-events-none"></span>

                        {/* My Learnings Button inside the dropdown */}
                        <span
                          className="relative z-10 px-6 py-2 text-black hover:text-white font-semibold rounded-md transition duration-300 ease-in-out "
                          onClick={() => {
                            setProfileDropdown(!profileDropdown);
                            navigate("/handle-users"); // Redirect to homepage
                          }}
                        >
                          loading....
                        </span>
                      </div>
                    </li>
                  )}
                  {/* Dropdown Option: My Learnings */}
                  <li
                    key={6}
                    className="relative group cursor-pointer text-md font-medium border-2 border-transparent rounded-md transition duration-300 ease-in-out hover:border-red-600 active:scale-95 hover:text-white hover:bg-red-600 text-black"
                  >
                    {/* Shine effect inside label span */}
                    <div className="relative overflow-hidden">
                      <span className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-red-300 to-transparent opacity-50 group-hover:left-full transition-all duration-700 ease-in-out pointer-events-none"></span>

                      {/* My Learnings Button inside the dropdown */}
                      <span
                        className="relative z-10 px-6 py-2 text-black hover:text-white font-semibold rounded-md transition duration-300 ease-in-out "
                        onClick={() => {
                          handleLogout(); // Clear session
                          navigate("/"); // Redirect to homepage
                        }}
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
            {isOpen ? (
              <FaTimes className="text-red-600" size={22} />
            ) : (
              <FaBars className="text-red-600" size={22} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-6 pb-6">
          <ul className="flex flex-col gap-4">
            {navLinks.map((link, i) => (
              <div key={i}>
                <li
                  className="font-semibold text-base relative px-3 py-2 rounded-xl cursor-pointer  transition-all duration-300 group border-2 bg-red-800  text-white  border-violet-900 "
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
                  <span className="absolute inset-0 bg-gradient-to-r from-transparent via-red-100 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
                </li>

                {/* Dropdown Items */}
                {link.dropdown && (
                  <ul className="ml-4 mt-2 flex flex-col gap-2">
                    {link.dropdown.map((item, idx) => (
                      <li
                        key={idx}
                        className="text-lg p-2 rounded-xl bg-red-800  text-white border-violet-900  cursor-pointer hover:underline relative group"
                        onClick={() => {
                          navigate(item.path);
                          setIsOpen(false);
                        }}
                      >
                        <span className="relative z-10 transition-colors duration-300 ml-5">
                          {item.name}
                        </span>
                        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-red-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer" />
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
            {isAdmin && (
              <Link
                onClick={() => {
                  setIsOpen(false);
                }}
                to="/handle-users"
              >
                <button className="w-full  bg-red-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-300">
                  handle users
                </button>
              </Link>
            )}

            {/* Profile and Signup Buttons */}
            <li className="mt-4 flex flex-col gap-3">
              {/* Profile or Login Button */}
              <Link
                onClick={() => {
                  setIsOpen(false);
                }}
                to={user ? "/my-learnings" : "/signin"}
              >
                <button className="w-full bg-red-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-300">
                  {user ? "Profile" : "Login"}
                </button>
              </Link>

              {/* Signup Button - only show if user is not logged in */}
              {!user && (
                <Link
                  onClick={() => {
                    setIsOpen(false);
                  }}
                  to="/signup"
                >
                  <button className="w-full  bg-red-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-lg transition-all duration-300">
                    Signup
                  </button>
                </Link>
              )}
              {user && (
                <div className="relative overflow-hidden grou text-white
                    bg-red-600 text-center p-2 rounded-lg ">
                  {/* Gradient Hover Effect */}
                  <span className=" top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-red-300 to-transparent opacity-50 group-hover:left-full transition-all duration-700 ease-in-out pointer-events-none"></span>

                  {/* Logout Button */}
                  <span
                    className=" z-10 px-6 py-3  font-semibold rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
                    onClick={() => {
                      handleLogout(); // Clear session
                      navigate("/"); // Redirect to homepage
                    }}
                  >
                    Logout
                  </span>
                </div>
              )}
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
