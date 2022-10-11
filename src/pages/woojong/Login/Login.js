import React from 'react';

function Login() {
  return (
    <header id="fullBox">
      <main id="mainBox">
        <hi id="titleName">Westagram</hi>
        <input className="loginId" type="email" />
        <input className="loginPw" type="password" />
        <button className="loginBtn">로그인</button>
      </main>
    </header>
  );
}

export default Login;
