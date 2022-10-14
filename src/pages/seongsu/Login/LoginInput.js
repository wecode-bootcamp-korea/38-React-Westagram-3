import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

function LoginInput() {
  const [loginValue, setLoginValue] = useState('');
  const [pwValue, setPwValue] = useState('');
  const [loginAllow, setLoginAllow] = useState(false);
  const navigate = useNavigate();
  const loginRef = useRef();

  function SaveUserId(event) {
    setLoginValue(event.target.value);
    if (event.target.value.includes('@') && pwValue.length > 5) {
      setLoginAllow(true);
    } else {
      setLoginAllow(false);
    }
  }

  function SaveUserPw(event) {
    setPwValue(event.target.value);
    if (loginValue.includes('@') && event.target.value.length > 5) {
      setLoginAllow(true);
    } else {
      setLoginAllow(false);
    }
  }

  function onSubmit(event) {
    event.preventDefault();
    fetch('http://10.58.52.135:3000/auth/signin', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: loginValue,
        password: pwValue,
      }),
    })
      .then(res => {
        return res.json();
      })
      .then(res => {
        localStorage.setItem('TOKEN', res.accessToken);
      })
      .then(console.log(localStorage.getItem('TOKEN')));
  }
  function signUp() {
    fetch('http://10.58.52.135:3000/auth/signup', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({
        email: loginValue,
        password: pwValue,
      }),
    }).catch('error');
  }
  return (
    <>
      <form onSubmit={onSubmit} id="loginForm">
        <input
          ref={loginRef}
          onChange={SaveUserId}
          value={loginValue}
          required
          className="inputbox"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
        />
        <input
          onChange={SaveUserPw}
          value={pwValue}
          required
          className="inputbox"
          type="password"
          placeholder="비밀번호"
        />
        <button className={loginAllow ? 'loginbtn loginbtnallow' : 'loginbtn'}>
          로그인
        </button>
      </form>
      <button className="loginbtn loginbtnallow" onClick={signUp}>
        회원가입
      </button>
    </>
  );
}

export default LoginInput;
