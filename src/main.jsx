import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Registration from './pages/Registration.jsx'
import Home from './pages/home.jsx'
import VisitorPass from './pages/VisitorPass.jsx'
import VisitorCheckout from './pages/VisitorCheckout.jsx'
import VisitorRegistrationSummary from './pages/VisitorRegistrationSummary.jsx'
import Alreadyregistor from './pages/Alreadyregistor.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/home" element={<Home />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/visitorPass" element={<VisitorPass />} />
         <Route path="/visitorCheckout" element={<VisitorCheckout />} />
          <Route path="/visitorRegistrationSummary" element={<VisitorRegistrationSummary />} />
          <Route path="/alreadyregistor" element={<Alreadyregistor />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
