import React, { useState } from "react";
import { Plus, RefreshCcw, FileText, X, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Phase1 = () => {
  const [templateFile, setTemplateFile] = useState(null);
  const [studentFile, setStudentFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e, setFile) => {
    const file = e.target.files[0];
    if (file) setFile(file);
  };

  const clearFile = (setFile) => setFile(null);

  const handleGenerate = () => {
    if (!templateFile || !studentFile) {
      alert("Please upload both files before generating certificates!");
      return;
    }


    setIsLoading(true);


    setTimeout(() => {
      navigate("/certificateReady", {
        state: {
          templateName: templateFile.name,
          studentName: studentFile.name,
        },
      });
    }, 3000);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-white">
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="animate-spin text-blue-600" size={48} />
          <p className="text-lg font-medium text-gray-700">
            Generating certificates, please wait...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-white">
      <div className="bg-gradient-to-b from-[#cfd8ff] to-[#dbf5d9] rounded-2xl shadow-md border border-gray-200 p-10 w-[80%] max-w-4xl flex flex-col items-center">

        {/* Upload Boxes */}
        <div className="flex flex-col sm:flex-row justify-center gap-10 mb-10">

          {/* Certificate Template Upload */}
          <label className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition p-10 w-64 flex flex-col items-center justify-center cursor-pointer relative">
            <input
              type="file"
              accept=".png,.jpg,.jpeg,.pdf"
              className="hidden"
              onChange={(e) => handleFileChange(e, setTemplateFile)}
            />

            {!templateFile ? (
              <>
                <Plus className="text-white mb-3 bg-blue-600 rounded-full p-1" size={28} />
                <h3 className="text-gray-700 font-medium text-sm">Upload files</h3>
                <p className="text-gray-400 text-xs mt-1">
                  Upload the certificate Template
                </p>
              </>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <FileText className="text-blue-600" size={28} />
                <p className="text-gray-700 text-sm font-medium text-center truncate w-40">
                  {templateFile.name}
                </p>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    clearFile(setTemplateFile);
                  }}
                  className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
                >
                  <X size={18} />
                </button>
              </div>
            )}
          </label>

          {/* Student List Upload */}
          <label className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition p-10 w-64 flex flex-col items-center justify-center cursor-pointer relative">
            <input
              type="file"
              accept=".csv,.xlsx,.xls"
              className="hidden"
              onChange={(e) => handleFileChange(e, setStudentFile)}
            />

            {!studentFile ? (
              <>
                <Plus className="text-white mb-3 bg-blue-600 rounded-full p-1" size={28} />
                <h3 className="text-gray-700 font-medium text-sm">Upload files</h3>
                <p className="text-gray-400 text-xs mt-1">
                  Upload Student list
                </p>
              </>
            ) : (
              <div className="flex flex-col items-center gap-2">
                <FileText className="text-blue-600" size={28} />
                <p className="text-gray-700 text-sm font-medium text-center truncate w-40">
                  {studentFile.name}
                </p>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    clearFile(setStudentFile);
                  }}
                  className="absolute top-3 right-3 text-gray-400 hover:text-red-500"
                >
                  <X size={18} />
                </button>
              </div>
            )}
          </label>
        </div>

        {/* Generate Button */}
        <button
          onClick={handleGenerate}
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg px-6 py-2 flex items-center gap-2 transition"
        >
          Generate Certificate
          <RefreshCcw size={16} />
        </button>
      </div>
    </div>
  );
};

export default Phase1;
