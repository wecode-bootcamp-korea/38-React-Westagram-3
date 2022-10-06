import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainDoyoung from "./pages/doyoung/Main/Main.js";
import MainYujin from "./pages/yujin/Main/Main.js";
import MainSeongsu from "./pages/seongsu/Main/Main.js";
import MainWoojong from "./pages/woojong/Main/Main.js";

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
