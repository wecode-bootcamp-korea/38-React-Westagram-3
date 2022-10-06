import React from 'react';
import useState from 'react';
import LoginInput from './LoginInput.js';
import './Login.scss';

function Login() {
  return (
    <div id="loginpage">
      <div id="advertise"></div>
      <div>
        <div id="loginbox">
          <h1>Seongsutagram</h1>
          <LoginInput />
          <p>또는</p>
          <span>Facebook으로 로그인</span>
          <span>비밀번호를 잊으셨나요?</span>
        </div>
        <div id="signInBox">
          <span>계정이 없으신가요?</span>
          <span>가입하기</span>
        </div>
        <div id="downloadBox">
          <span>앱을 다운로드하세요.</span>
          <div id="downloadBtn">
            <div className="downloadbox">
              <img
                alt=""
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_korean-ko.png/4a5c9d62d51b.png"
              />
            </div>
            <div className="downloadbox">
              <img
                alt=""
                src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_korean-ko.png/f155b664a93b.png"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
