"use client";
import Image from "next/image";
import Logo from "@/public/assets/logo/logo.svg";
// import { IoMdHome } from "react-icons/io";

import { useState } from "react"; // Import useState for state management
import { IoMdHome } from "react-icons/io"; // Assuming you're using this for icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Icons for hamburger menu
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle menu

  return (
    <>
      {/* Header Section */}
      <div className={`border-[2px] border-red `}>
        {/* Header Start*/}
        <header className={`flex justify-between py-5 mainContainer`}>
          {/* Header Logo */}
          <div className={` w-40 sm:w-[250px] sm:border-red-500`}>
            <Image src={Logo} alt="Logo" />
          </div>

          {/* Hamburger Icon for small screens */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[30px] text-red-600"
            >
              {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
            </button>
          </div>

          {/* Navigation List for medium and larger screens */}
          <nav className="hidden md:flex">
            <ul className={`flex gap-[50px] items-center`}>
              <li
                className={`flex flex-col items-center gap-[5px] cursor-pointer text-[#66a266] text-[25px]`}
              >
                <IoMdHome />
                <div
                  className={`w-[10px] h-[10px] bg-[red] rounded-full`}
                ></div>
              </li>
              <li className={`text-[16px] cursor-pointer`}>Blog</li>
              <li className={`text-[16px] cursor-pointer`}>Font</li>
              <li className={`text-[16px] cursor-pointer`}>Templates</li>
              <li className={`text-[16px] cursor-pointer`}>Icons</li>
              <li className={`text-[16px] cursor-pointer`}>Wordpress</li>
            </ul>
          </nav>

          {/* Dropdown Menu for small screens (hamburger) */}
          {isMenuOpen && (
            <nav className="md:hidden absolute top-20 right-0 w-full bg-white shadow-lg">
              <ul className="flex flex-col items-center gap-5 py-5">
                <li className="text-[20px] text-[#66a266] cursor-pointer">
                  Home
                </li>
                <li className="text-[16px] cursor-pointer">Blog</li>
                <li className="text-[16px] cursor-pointer">Font</li>
                <li className="text-[16px] cursor-pointer">Templates</li>
                <li className="text-[16px] cursor-pointer">Icons</li>
                <li className="text-[16px] cursor-pointer">Wordpress</li>
              </ul>
            </nav>
          )}
        </header>
        {/* Header End */}
      </div>
    </>
  );
};

export default Header;
