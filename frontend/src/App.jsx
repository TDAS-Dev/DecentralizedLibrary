import LandingPage from "./Components/LandingPage/LandingPage";
import AboutPage from "./Components/AboutPage/AboutPage";
import UploadPage from "./Components/UploadPage/UploadPage";
import HomePage from "./Components/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

function App() {
  const [ mobileNavBar, setMobileNavBar ] = useState(false)
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/project-team" element={<AboutPage setMobileNavBar={setMobileNavBar} mobileNavBar ={mobileNavBar}/>} />
          <Route path="/upload" element={<UploadPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
