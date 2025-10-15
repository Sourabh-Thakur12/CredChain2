import React from "react";
import { CheckCircle, Download } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const CertificateReady = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { templateName, studentName } = location.state || {};

  const fileUrl = "/sample-certificate.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = "Certificates.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center">
      <CheckCircle className="text-green-600 mb-4" size={60} />
      <h1 className="text-2xl font-semibold text-gray-800">
        Certificates Generated Successfully!
      </h1>

      <div className="mt-3 text-gray-600">
        <p>
          Template File: <span className="font-medium">{templateName}</span>
        </p>
        <p>
          Student List: <span className="font-medium">{studentName}</span>
        </p>
      </div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <button
          onClick={handleDownload}
          className="bg-blue-600 hover:bg-blue-700 text-white flex items-center gap-2 px-5 py-2 rounded-lg transition"
        >
          <Download size={18} />
          Download Certificates
        </button>

        <button
          onClick={() => navigate("/")}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg transition"
        >
          Generate Again
        </button>
      </div>
    </div>
  );
};

export default CertificateReady;
