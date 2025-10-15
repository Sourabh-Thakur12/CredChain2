
import './App.css'
import CertificateReady from './component/event/CertificateReady';
import StudentDashboard from './pages/StudentDashboard'
import FileUploadCard from './component/FileUploadCard'
import { Routes, Route } from "react-router-dom";
import VerificationResult from './component/VerificationResult';
import Phase1 from "./component/event/Phase1";
import Phase2 from "./component/event/Phase2";
import Phase3 from "./component/event/Phase3";
import AdminDashboard from './pages/AdminDashboard.jsx'

function App() {


  return (
    <>

       {/* <Routes>
        <Route path="/" element={<FileUploadCard />} />
        <Route path="/result" element={<VerificationResult/>} />
      </Routes> */}

      {/* <StudentDashboard/> */}
    <Routes>
        <Route path='/' element={<AdminDashboard/>}/>
        <Route path='/StudentDashboard' element={<StudentDashboard/>}/>
        <Route path="/Phase1" element={<Phase1 />} />
        <Route path="/Phase2" element={<Phase2 />} />
        <Route path="/Phase3" element={<Phase3 />} />
        <Route path="/certificateReady" element={<CertificateReady />} />
        <Route path="/Verify" element={<FileUploadCard />} />
        <Route path="/result" element={<VerificationResult/>} />
      </Routes>


    </>
  )
}

export default App
