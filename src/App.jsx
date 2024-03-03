import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginSignup from "./Pages/LoginSignup";
import Attendance from "./Pages/Attendance";
import Marks from "./Pages/Marks";
import Settings from "./Pages/Settings";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
const App = () => {
  return (
    <>
      <div className="app">
        {/* Setting Up Routes */}
        <BrowserRouter>
          <Routes>
            {/* Home Routes */}
            <Route path="/">
              <Route index element={<Home />} />
              <Route path="login" element={<LoginSignup />} />
            </Route>
            {/* User Routes */}
            <Route path="/attendance" element={<Attendance />} />
            <Route path="/marks" element={<Marks />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
};

export default App;
