import { Search, Funnel, ExternalLink, Download } from "lucide-react";

function StudentDashboard() {
  return (
    <>
   <div className="relative md:static w-full md:my-5">
    <div className=' md:hidden block'><img className="w-full" src="\Rectangle 15.svg" alt="background" /></div>
    <h2 className="absolute md:static top-1 left-0 p-5
                 text-2xl font-semibold text-black drop-shadow-lg">
        Welcome jenny,
        </h2>
    </div>


    <div className="min-h-screen bg-white  p-4">

      <div className="flex items-center bg-[#F8F9FA] rounded-xl px-3 py-1.5 mb-6 shadow-sm">
        <Search className="text-gray-500 mr-2" size={22} />
        <input
          type="text"
          placeholder="Search your certificate"
          className="flex-1 py-3 bg-transparent outline-none text-gray-700 placeholder-gray-400"
        />
        <Funnel className="text-gray-700" size={25} />
      </div>


      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        My Certificates <span className="text-sm text-gray-500">(13)</span>
      </h3>

      <div className="space-y-5 bg-[#F8F9FA]">
        {[1, 2, 3].map((_, index) => (
          <div
            key={index}
            className="flex bg-white rounded-xl shadow-md p-4 items-stretch"
          >

            <div className="w-20 h-24 bg-[#C4CEFF] rounded-lg mr-3"></div>


            <div className="flex flex-col justify-between flex-1">

              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-gray-800 text-xs">
                    Deen Dayal Upadhaya college
                  </p>
                  <p className="text-xs text-gray-600">Issued Date :</p>
                  <p className="text-xs text-gray-600">Status :</p>
                </div>
                <ExternalLink
                  size={18}
                  className="text-gray-700 cursor-pointer"
                />
              </div>


              <div className="flex justify-end mt-2">
                <button className="flex items-center bg-[#3B82F6] text-white text-xs font-medium rounded-lg px-3 py-3 shadow-md hover:bg-blue-600">
                  <Download size={14} className="mr-1" />
                  Download
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default StudentDashboard;
