import React from 'react';
import './Login.scss';

const Login = () => {
  return (
    <div className="login">
      <body>
        <div className="container">
          <div className="main_container">
            <div className="logo">
              <p>westagram</p>
            </div>
            <div className="login_container">
              <input
                id="login_id"
                type="text"
                placeholder="전화번호, 사용자 이름 이메일"
              />
              <input id="login_pw" type="password" placeholder="비밀번호" />
            </div>
            <button
              id="login_bt"
              type="button"
              onClick={() => (window.location.href = 'main.html')}
              className="login_btn"
            >
              로그인
            </button>
            <div className="pw_lost">
              <a href="/">비밀번호를 잊으셨나요?</a>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default Login;
