import React from "react";

export default function CertificateIssued() {
  // Dummy data
  const certificates = [
    { id: 1, event: "Tech Innovators 2025", count: 35 },
    { id: 2, event: "AI Symposium", count: 35 },
    { id: 3, event: "Cyber Awareness Week", count: 35 },
    { id: 4, event: "Data Science Bootcamp", count: 35 },
    { id: 5, event: "Hackathon 2025", count: 35 },
  ];

  return (
    <div className="bg-white p-8 rounded-xl shadow-sm my-[3em]">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Certificate Issued</h2>
        <button className="text-sm text-blue-600 hover:underline font-medium">
          View More
        </button>
      </div>

      
      <div className="space-y-4">
        {certificates.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center bg-red-50 px-4 py-3 rounded-lg border border-gray-200 hover:shadow transition-shadow"
          >
            <span className="font-semibold text-gray-800">Event Name</span>
            <div className="flex items-center gap-2 text-gray-700 font-medium">
              <span>Certificate Issued</span>
              <span className="font-bold text-gray-900">{item.count}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
