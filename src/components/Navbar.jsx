import { FaHome, FaCalendarAlt, FaFolderOpen, FaSearch, FaUserCircle } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [menu, setMenu] = useState("home");

  return (
    <div className="navbar flex items-center justify-between p-4 bg-transparent">
      {/* Left Side */}
      <div className="flex items-center gap-6">
        {/* Logo Placeholder */}
        <div className="w-[50px] h-[50px] bg-gray-300 flex items-center justify-center rounded-full">
          LOGO
        </div>

        {/* Text Logo */}
        <div className="text-black text-lg font-semibold">アニマンガヘブン</div>

        {/* Vertical Icon Navigation */}
        <div className="hidden md:flex items-center gap-7 ml-[200px]"> {/* Hide on small screens */}
          <div
            className={`cursor-pointer w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-white ${
              menu === "home" ? "bg-yellow-600" : ""
            }`}
            onClick={() => setMenu("home")}
          >
            <FaHome size={20} />
          </div>
          <div
            className={`cursor-pointer w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-white ${
              menu === "calendar" ? "bg-gray-400" : ""
            }`}
            onClick={() => setMenu("calendar")}
          >
            <FaCalendarAlt size={20} />
          </div>
          <div
            className={`cursor-pointer w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center text-white ${
              menu === "folder" ? "bg-gray-400" : ""
            }`}
            onClick={() => setMenu("folder")}
          >
            <FaFolderOpen size={20} />
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex items-center gap-6">
        {/* Search Bar */}
        <div className="relative hidden sm:block"> {/* Hide on extra-small screens */}
          <input
            type="text"
            placeholder="Search"
            className="pl-8 pr-4 py-2 bg-gray-100 rounded-full focus:outline-none"
          />
          <FaSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        {/* Profile Section */}
        <div className="flex items-center gap-3">
          <span className="text-black font-medium hidden sm:block">Hi, Anna</span> {/* Hide on extra-small screens */}
          <FaUserCircle className="text-gray-400" size={40} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
