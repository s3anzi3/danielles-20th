import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login.js";
import MainContent from "./components/MainContent.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/main" element={<MainContent />} />
      </Routes>
    </Router>
  );
}

export default App;
