import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Worldview from "./pages/Worldview";
import Characters from "./pages/Characters"; // ⬅️ 추가!

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/worldview" element={<Worldview />} />
        <Route path="/characters" element={<Characters />} /> {/* ⬅️ 연결 */}
      </Routes>
    </BrowserRouter>
  );
}