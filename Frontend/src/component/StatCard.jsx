import React from "react";

export default function StatCard({ title, value }) {
  return (
    <div className="bg-[#3758ee] text-white rounded-md px-4 py-6 flex items-center w-[300px] justify-between shadow-sm">
      <p className="text-medium text-white font-medium">{title}</p>
      <span className="text-xl font-semibold px-4 ">{value}</span>
    </div>
  );
}
