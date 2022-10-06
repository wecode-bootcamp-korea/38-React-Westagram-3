import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainDoyoung from "./pages/김도영/main/main.js";
import MainYujin from "./pages/모유진/main/main.js";
import MainSeongsu from "./pages/박성수/main/main.js";
import MainWoojong from "./pages/최우종/main/main.js";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/doyoung" element={<MainDoyoung />} />
        <Route path="/seongsu" element={<MainSeongsu />} />
        <Route path="/yujin" element={<MainYujin />} />
        <Route path="/woojong" element={<MainWoojong />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
