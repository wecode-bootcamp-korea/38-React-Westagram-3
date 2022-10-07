import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from '../Main/Main.js';
import './Login.scss';

function Login() {
  let [ValueOfIdInput, setValueOfIdInput] = useState(''); //const로 선언하면 왜 안됨? let으로 해야되는데
  let [ValueOfPwInput, setValueOfPwInput] = useState(''); //const로 선언하면 왜 안됨? let으로 해야되는데

  //id 인풋창 onchange 이벤트 발생시, 인풋 텍스트를 state로 저장한다
  function MakeIdInputToState(e) {
    setValueOfIdInput = e.target.value;
    console.log(setValueOfIdInput);
  }
  //Pw 인풋창 onchange 이벤트 발생시, 인풋 텍스트를 state로 저장한다
  function MakePwInputToState(e) {
    setValueOfPwInput = e.target.value;
    console.log(setValueOfPwInput);
  }
  //id,pw 인풋에서 엔터를 누르면
  function ifYouClickEnter(e) {
    if (ValueOfIdInput && ValueOfPwInput && e.key === 'Enter') {
      console.log('dd'); // Enter 입력이 되면 클릭 이벤트 실행
    }
  }
  //리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴ㅍ
  return (
    <div className="Login">
      <div className="contentsBox">
        <div className="Logo">Westagram</div>
        <input
          className="Input"
          onChange={MakeIdInputToState}
          onKeyUp={ifYouClickEnter}
        />
        <input
          className="Input"
          onChange={MakePwInputToState}
          onKeyUp={ifYouClickEnter}
        />
        <button className="LoginButton">로그인</button>
        <a className="FindPw" href="https://www.youtube.com/">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
}

export default Login;
