import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from '../Main/Main.js';
import './Login.scss';

function Login() {
  return (
    <div className="Login">
      <div className="contentsBox">
        <div className="Logo">Westagram</div>
        <input className="Input" />
        <input className="Input" />
        <button className="LoginButton">로그인</button>
        <a className="FindPw" href="https://www.youtube.com/">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
}

export default Login;
