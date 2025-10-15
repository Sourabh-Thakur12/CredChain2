import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Phase2() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-gradient-to-b from-indigo-100 to-green-100 rounded-2xl shadow-lg p-8 border border-gray-200">
        <h1 className="text-2xl font-semibold mb-6 text-gray-800">
          New Event
        </h1>

        <form className="space-y-6">
          <div>
            <label
              htmlFor="eventName"
              className="block text-sm font-medium text-gray-800 mb-2"
            >
              Name of the Event
            </label>
            <input
              type="text"
              id="eventName"
              placeholder="Enter event name"
              className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="eventDescription"
              className="block text-sm font-medium text-gray-800 mb-2"
            >
              Description of event
            </label>
            <textarea
              id="eventDescription"
              rows="4"
              placeholder="Write event details..."
              className="w-full rounded-md border border-gray-300 bg-gray-50 px-4 py-2 text-gray-800 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            ></textarea>
          </div>

          <div className="flex justify-center">
            <Link to="/Phase1">
            <button
              type="submit"
              className="flex items-center gap-2 rounded-md bg-blue-600 px-5 py-2 text-white font-semibold hover:bg-blue-700 transition-all duration-200"
            >
              Next
              <ArrowRight size={18} />
            </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
