import React from "react";
import { Link } from "react-router-dom";

export default function Phase3() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-sky-50 to-blue-100 p-8">
      <div className="w-full max-w-5xl bg-gradient-to-br from-indigo-100 to-green-100 rounded-3xl shadow-2xl p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 border border-gray-200">

        {/* Left Section */}
        <div className="flex-1 space-y-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
            Generate tamper proof <br /> certificate for your course
          </h1>

          <div className="flex flex-wrap gap-6">

            <Link to="/Phase2">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg text-lg transition-all duration-200 shadow-md">
              Create New Event
            </button>
            </Link>

            <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-lg text-lg transition-all duration-200 shadow-md">
              Existing Courses
            </button>
          </div>
        </div>

        {/* Right Section - Image */}
        <div className="flex-1 flex justify-center">
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl p-5">
            <img
              src="/paper.png"
              alt="Certificate"
              className="w-72 md:w-96 h-auto rounded-xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
