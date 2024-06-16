import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import {
  FaFacebook,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "./Button";
import Logo from "./Logo";
import { useSelector } from "react-redux";

const MobileMenu = ({ signOut }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex  ">
      <button
        onClick={toggleMenu}
        className="lg:hidden p-2 text-gray-600 hover:text-gray-800"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-fit bg-white dark:bg-[#020b19] z-50 flex flex-col py-10 items-center justify-center shadow-xl gap-8">
          <Logo />
          <ul className="flex flex-col gap-4 text-base text-black dark:text-gray-300">
            <li onClick={toggleMenu}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/create">Create Post</Link>
            </li>
            <li onClick={toggleMenu}>
              <Link to="/authors">Authors</Link>
            </li>
          </ul>
          <div className="flex gap-2 items-center">
            {userInfo?.token ? (
              <div className="w-full flex  flex-col items-center justify-center ">
                <div className="flex gap-1 items-center mb-5">
                  {userInfo?.profilePicture ? (
                    <img
                      src={userInfo?.profilePicture}
                      alt="Profile"
                      className="rounded-full w-14 h-14 object-cover"
                    />
                  ) : (
                    <span className="text-white w-8 h-8 rounded-fullflex items-center justify-center">
                      {userInfo?.firstName}
                    </span>
                  )}
                </div>

                <button
                  className="bg-black dark:bg-rose-600 text-white dark:text-white px-8 py-1.5 rounded-full text-center outline-none"
                  onClick={() => signOut()}
                >
                  Logout
                </button>
              </div>
            ) : (
              <Link to="/login">
                <Button
                  label="Sign in"
                  styles="flex items-center justify-center bg-black dark:bg-rose-600 text-white dark:text-white text-white px-4 py-1.5 rounded-full"
                />
              </Link>
            )}
          </div>

          <span
            className="cursor-pointer text-xl font-semibold dark:text-white"
            onClick={toggleMenu}
          >
            <AiOutlineClose />
          </span>
        </div>
      )}
    </div>
  );
};

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);

  return (
    <nav className="flex sticky top-0 z-10 flex-row pl-2 pr-1  md:flex-row w-full py-5  items-center justify-between gap-4 md:gap-0 dark:bg-[#020b19] ">
      <div className="flex gap-2 text-[20px] md:hidden lg:flex">
        <Link
          to="https://www.linkedin.com/in/sasikiran-kola/"
          className="text-blue-600"
        >
          <FaLinkedin />
        </Link>
        <Link
          to="https://www.facebook.com/sasikiran.kiran.5/"
          className="text-blue-600"
        >
          <FaFacebook />
        </Link>
        <Link
          to="https://www.instagram.com/mr_sasi_03/"
          className="text-rose-600"
        >
          <FaInstagram />
        </Link>
        <Link to="https://twitter.com/SasiKiran_03" className="text-blue-500">
          <FaTwitterSquare />
        </Link>
      </div>

      <Logo />
      <div className="hidden md:flex gap-14 items-center">
        <ul className="flex gap-8 text-base text-black dark:text-white">
          <Link to="/">Home</Link>
          <Link to="/create">Create Post</Link>
          <Link to="/authors">Authors</Link>
        </ul>

        <div className="flex gap-2 items-center cursor-pointer">
          {userInfo?.token ? (
            <div
              className="relative"
              onClick={() => setShowProfile((prev) => !prev)}
            >
              <div className="flex gap-1 items-center cursor-pointer mr-6">
                {userInfo?.profilePicture ? (
                  <img
                    src={userInfo?.profilePicture}
                    alt="Profile"
                    className="rounded-full w-14 h-14 object-cover"
                  />
                ) : (
                  <span className="text-white rounded-full flex items-center justify-center bg-gray-500 w-9 h-9">
                    {userInfo?.firstName.charAt(0)}
                  </span>
                )}
              </div>

              {showProfile && (
                <div className="absolute bg-white dark:bg-[#2f2d30] py-6 px-6 flex flex-col shadow-2xl z-50 right-0 gap-3 rounded">
                  <Link to="/profile/kalkhlakhgalgit" className="text-white">
                    Profile
                  </Link>
                  <span className="border-t border-slate-300 text-rose-700">
                    Logout
                  </span>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <Button
                label="Sign in"
                styles="flex items-center justify-center bg-black dark:bg-rose-600 text-white dark:text-white px-4 py-1.5 rounded-full"
              />
            </Link>
          )}
        </div>
      </div>
      <div className="block md:hidden">
        <MobileMenu />
      </div>
    </nav>
  );
};

export default Navbar;
