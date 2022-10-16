import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginInput = () => {
  const [userInfoValue, setUserInfoValue] = useState({ email: '', pw: '' });
  const navigate = useNavigate();
  let isLoginAllow =
    userInfoValue.email.includes('@') && userInfoValue.pw.length > 5;

  const userInputEmail = event => {
    setUserInfoValue({ ...userInfoValue, email: event.target.value });
  };

  const userInputPw = event => {
    setUserInfoValue({ ...userInfoValue, pw: event.target.value });
  };

  const onSubmit = event => {
    event.preventDefault();
    fetch('http://10.58.52.135:3000/auth/signin', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: userInfoValue.email,
        password: userInfoValue.pw,
      }),
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        localStorage.setItem('TOKEN', res.accessToken);
      });
  };
  const signUp = () => {
    fetch('http://10.58.52.135:3000/auth/signup', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: userInfoValue.email,
        password: userInfoValue.pw,
      }),
    }).catch('error');
  };
  return (
    <>
      <form onSubmit={onSubmit} id="loginForm">
        <input
          value={userInfoValue.email}
          onChange={userInputEmail}
          required
          className="inputbox"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          value={userInfoValue.pw}
          onChange={userInputPw}
          required
          className="inputbox"
          type="password"
          placeholder="비밀번호"
        />
        <button
          className={isLoginAllow ? 'loginbtn loginbtnallow' : 'loginbtn'}
        >
          로그인
        </button>
      </form>
      <button className="loginbtn loginbtnallow" onClick={signUp}>
        회원가입
      </button>
    </>
  );
};

export default LoginInput;
