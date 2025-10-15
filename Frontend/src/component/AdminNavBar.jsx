import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

export default function AdminNavBar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="w-full">

      <div className="flex justify-end items-center px-6 py-1 bg-gradient-to-r from-[#87DB9E] to-[#4361EE] text-white text-sm">
        <div className="flex items-center space-x-10">
          <span className="cursor-pointer">हिंदी</span>
          <div className="flex items-center space-x-5">
            <button className="hover:underline">A-</button>
            <button className="hover:underline">A</button>
            <button className="hover:underline">A+</button>
          </div>
        </div>
      </div>


      <div className="bg-white px-6 py-2 shadow-sm flex items-center">
        <h1 className="text-[#4361EE] font-semibold text-2xl">CredChain</h1>
      </div>


      <div className="flex items-center justify-center space-x-12 bg-[#4361EE] text-white px-6 py-4 text-medium font-medium">
        <Link to="/">
        <button className="hover:underline">Dashboard</button>
        </Link>
        <button className="hover:underline">Overview</button>
        <Link to="/Phase3">
        <button className="hover:underline">Issue Certificate</button>
        </Link>
        <button className="hover:underline">Manage Templates</button>


        <div
          className="relative"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="flex items-center hover:underline">
            Updates <ChevronDown className="ml-1 w-4 h-4" />
          </button>
          {isDropdownOpen && (
            <div className="absolute left-0 mt-2 w-40 bg-white text-gray-800 rounded-md shadow-md z-10">
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                News
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-100">
                Announcements
              </a>
            </div>
          )}
        </div>

        <button className="hover:underline">Team of use</button>
      </div>
    </nav>
  );
}
