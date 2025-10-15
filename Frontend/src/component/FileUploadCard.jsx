import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Upload, QrCode, ArrowRightLeft } from "lucide-react";

export default function FileUploadCard() {
  const [activeTab, setActiveTab] = useState("file");
  const [file, setFile] = useState(null);
  const navigate = useNavigate();
  const fileName = file ? file.name : "No file selected";

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && selectedFile.type === "application/pdf") {
      setFile(selectedFile);
    } else {
      alert("Please upload a PDF file");
    }
  };

  const handleProceed = () => {
    if (!file) {
      alert("Please upload a certificate before proceeding.");
      return;
    }
    // You can pass file info using state
    navigate("/result", { state: { fileName: file.name } });
  };

  return (
    <div className="flex justify-center items-start min-h-screen pt-12">
      <div className="max-w-sm w-full mx-4 sm:mx-auto mt-12 bg-[#F8F9FA] shadow-lg rounded-2xl p-6 border border-gray-200">
        <div className="flex bg-white rounded-lg p-3 mb-6 shadow-md">
          <button
            onClick={() => setActiveTab("file")}
            className={`flex-1 py-2 px-4 text-sm font-semibold rounded-md transition-all ${
              activeTab === "file"
                ? "bg-[#C4CEFF] text-[#4361EE] shadow-sm"
                : "text-gray-500 bg-white hover:text-gray-700"
            }`}
          >
            File
          </button>
          <button
            onClick={() => setActiveTab("credential")}
            className={`flex-1 py-2 px-4 text-sm font-semibold rounded-md transition-all ${
              activeTab === "credential"
                ? "bg-[#C4CEFF] text-[#4361EE] shadow-sm"
                : "text-gray-500 bg-white hover:text-gray-700"
            }`}
          >
            Credential
          </button>
        </div>

        {activeTab === "file" ? (
          <label className="flex flex-col items-center justify-center h-60 border-2 border-dashed border-blue-300 rounded-xl bg-blue-50 cursor-pointer hover:bg-blue-100 transition-colors">
            <Upload size={32} className="text-blue-500 mb-3" />
            <p className="font-semibold text-gray-800">Upload files</p>
            <p className="text-sm text-gray-500 mt-1">Choose certificate to verify</p>
            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="hidden"
            />
          </label>
        ) : (
          <div className="h-40 flex items-center justify-center bg-gray-100 rounded-xl text-gray-500 border border-gray-200">
            Credential input area
          </div>
        )}

        <div className="flex gap-3 mt-6">
          <button className="flex-1 flex items-center justify-center gap-2 bg-gray-800 text-white py-4 rounded-xl hover:bg-gray-900 transition-colors font-medium">
            <QrCode size={20} />
            Scan
          </button>
          <button
            onClick={handleProceed}
            className="flex-1 flex items-center justify-center gap-2 bg-[#4361EE] text-white py-4 rounded-xl hover:bg-blue-700 transition-colors font-medium"
          >
            <ArrowRightLeft size={18} />
            Proceed
          </button>
        </div>

        {file && (
          <p className="mt-4 text-sm text-gray-600 text-center truncate">
            Selected: {file.name}
          </p>
        )}
      </div>
    </div>
  );
}
