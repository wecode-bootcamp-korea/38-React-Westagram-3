import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainDoyoung from './pages/doyoung/Main/Main.js';
import MainYujin from './pages/yujin/Main/Main.js';
import MainSeongsu from './pages/seongsu/Main/Main.js';
import MainWoojong from './pages/woojong/Main/Main.js';
import LoginWoojong from './pages/woojong/Login/Login';
import LoginDoyoung from './pages/doyoung/Login/Login';
import LoginSeongsu from './pages/seongsu/Login/Login';
import LoginYujin from './pages/yujin/Login/Login';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/doyoung" element={<MainDoyoung />} />
        <Route path="/doyoung/login" element={<LoginDoyoung />} />
        <Route path="/seongsu" element={<MainSeongsu />} />
        <Route path="/seongsu/login" element={<LoginSeongsu />} />
        <Route path="/yujin" element={<MainYujin />} />
        <Route path="/yujin/login" element={<LoginYujin />} />
        <Route path="/woojong" element={<MainWoojong />} />
        <Route path="/woojong/login" element={<LoginWoojong />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
