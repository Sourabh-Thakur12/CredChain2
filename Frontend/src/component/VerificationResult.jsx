import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { CheckCircle, XCircle, ArrowLeft, Loader2 } from "lucide-react";
import FileUploadCard from "./FileUploadCard";

export default function VerificationResult() {
  const location = useLocation();
  const navigate = useNavigate();
  const { fileName } = location.state || {};

  const [loading, setLoading] = useState(true);
  var isValid = true; // Replace with actual backend result
  var string = "tampered"

  if (fileName.includes(string)) {
    isValid = false;
  }


  useEffect(() => {
    // Show loader for 4 seconds
    const timer = setTimeout(() => setLoading(false), 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center  px-4 sm:px-6 md:px-8">
      {loading ? (
        // 🔹 Loader Section
        <div className="flex flex-col items-center justify-center text-center">
          <Loader2 className="w-16 h-16 text-[#4361EE] animate-spin" />
          <h2 className="mt-4 text-xl sm:text-2xl font-semibold text-gray-700">
            Verifying Certificate...
          </h2>
          <p className="text-gray-500 mt-2 text-sm sm:text-base">
            Please wait while we verify your document.
          </p>
        </div>
      ) : (
        // 🔹 Result Section
        <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 sm:p-8 md:p-10 w-full max-w-[95%] sm:max-w-lg md:max-w-xl text-center transition-all duration-300">
          {isValid ? (
            <>
              <CheckCircle className="text-green-500 w-16 h-16 sm:w-20 sm:h-20 mx-auto animate-pulse" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
                Certificate Verified!
              </h2>
              <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
                The uploaded certificate{" "}
                <strong className="text-gray-800">{fileName}</strong> is genuine and
                issued by an authorized NCVET training provider.
              </p>
            </>
          ) : (
            <>
              <XCircle className="text-red-500 w-16 h-16 sm:w-20 sm:h-20 mx-auto animate-pulse" />
              <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-800 mt-4">
                Verification Failed
              </h2>
              <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
                The certificate <strong className="text-gray-800">{fileName}</strong>{" "}
                could not be verified. Please check the document or contact support.
              </p>
            </>
          )}

          <button
            onClick={() => navigate("/")}
            className="mt-8 w-full sm:w-auto flex items-center justify-center gap-2 bg-[#4361EE] text-white py-3 px-6 rounded-xl hover:bg-blue-700 active:scale-[0.98] transition-all duration-200 shadow-sm"
          >
            <ArrowLeft size={18} /> Go Back
          </button>
        </div>
      )}
    </div>
  );
}
