import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Navbar from './component/Navbar.jsx'
import Footer from './component/Footer.jsx'
import { BrowserRouter } from 'react-router-dom'
import AdminNavBar from './component/AdminNavBar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <div className=' md:hidden block'>
        <Navbar/>
    </div>
    <div className='hidden md:block'>
        <AdminNavBar/>
    </div>
    <div className=''>
    <App />
    </div>
    <Footer/>
    </BrowserRouter>
  </StrictMode>,
)
