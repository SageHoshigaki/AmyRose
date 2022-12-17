import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Shop from "./pages/Shop";
// import your route components too

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="contact" element={<Contact />} />
      <Route path="about" element={<About />} />
      <Route path='shop' element={<Shop />} />
    </Routes>
  </BrowserRouter>
);
