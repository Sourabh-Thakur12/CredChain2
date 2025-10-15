import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-[#4361EE] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Left Section */}
          <div className="flex items-center">
            <button
              className="sm:hidden mr-2"
              onClick={toggleMenu}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <span className="text-lg font-semibold mx-1">CredChain</span>
          </div>


          <div className="hidden sm:flex space-x-6">
            <a href="#" className="hover:text-gray-200">Home</a>
            <Link to="/Verify"><button className="hover:text-gray-200">Verify</button></Link>
            <Link to="/StudentDashboard" ><button className="hover:text-gray-200">My Certificates</button></Link>
            <a href="#" className="hover:text-gray-200">Progress</a>
          </div>


          <div>
            <button className="bg-white text-blue-600 px-4 py-2 rounded-md hover:bg-gray-100">
              Sign In
            </button>
          </div>
        </div>
      </div>


      {isOpen && (
        <div className="sm:hidden px-2 pb-3 space-y-2 bg-[#4361EE]">
          <a href="#" className="block hover:bg-blue-700   rounded-md px-3 py-2">Home</a>
          <Link to="/Verify"><button className="block hover:bg-blue-700  rounded-md px-3 py-2">Verify</button></Link>
          <Link to="/StudentDashboard" ><button className="block hover:bg-blue-700  rounded-md px-3 py-2">My Certificates</button></Link>
          <a href="#" className="block hover:bg-blue-700  rounded-md px-3 py-2">Progress</a>
        </div>
      )}
    </nav>
  );
}
