import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Main from '../Main/Main.js';
import './Login.scss';

function Login() {
  // id pw받을 state 만들기
  const [ValueOfIdInput, setValueOfIdInput] = useState('');
  const [ValueOfPwInput, setValueOfPwInput] = useState('');

  //id 인풋 onchange -> 텍스트를 state로 저장
  function MakeIdInputToState(e) {
    setValueOfIdInput(e.target.value);
  }
  //Pw 인풋 onchange ->텍스트를 state로 저장
  function MakePwInputToState(e) {
    setValueOfPwInput(e.target.value);
  }

  ///////////인풋값 바뀔때마다 밸리데이션 체크
  useEffect(() => {
    if (ValueOfIdInput.includes('@') && ValueOfPwInput.length > 4) {
      ButtonToggle();
    } else {
      setButtonToggleState(true);
    }
    console.log(ValueOfIdInput);
  }, [ValueOfIdInput, ValueOfPwInput]);

  //위에서 버튼 활성조건 만족한것 확인되면 버튼 활성화 함수 만들기
  function ButtonToggle() {
    console.log('버튼 활성화');
    setButtonToggleState(false);
  }

  //버튼누르면 메인으로 인도할 네비게이터 생성
  const navigate = useNavigate();
  const goToMain = () => {
    navigate('/doyoung');
  };

  const [buttonToggleState, setButtonToggleState] = useState(true);
  //이후 로그인 버튼에 온클릭함수 넣었음. 누르면 메인으로감 (../Main/Main 이런거 아니고 /doyoung임)

  //리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴리턴
  return (
    <div className="Login">
      <div className="contentsBox">
        <div className="Logo">Westagram</div>
        <input className="Input" onChange={MakeIdInputToState} />
        <input className="Input" onChange={MakePwInputToState} />
        <button
          className="LoginButton"
          onClick={goToMain}
          disabled={buttonToggleState}
        >
          로그인
        </button>
        <a className="FindPw" href="https://www.youtube.com/">
          비밀번호를 잊으셨나요?
        </a>
      </div>
    </div>
  );
}

export default Login;
