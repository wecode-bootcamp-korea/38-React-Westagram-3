import React, { useState } from 'react';
import { useEffect } from 'react';
import emoji from '../../../assets/doyoung/emoji.png';

function CommentBox() {
  // 버튼 활성/비활성을 boolean으로 주기위해 state생성
  const [ButtonBoolean, setButtonBoolean] = useState(true);
  // 인풋창에 입력한값 저장할 state생성
  const [InputValueState, setInputValueState] = useState([]);
  //실시간 입력되는 인풋 밸류를 저장하는 state생성
  const [TypedValue, setTypedValue] = useState('');

  //InputValue를 배열객체로 저장해야되니까 객체틀만듬
  let ObjectFrame = {};

  //인풋창 OnChange 이벤트
  function InputOnChange(e) {
    //(1자 이상)검사 통과하면 버튼키활성화
    setTypedValue(e.target.value); //여기서 TypedValue가 변경되고 유즈이펙트 발생
  }

  //바로 이후에 유즈이펙트로 유효성검사후 버튼키 활성화시킴
  useEffect(() => {
    if (TypedValue) {
      setButtonBoolean(false);
    } else {
      setButtonBoolean(true);
    }
  }, [TypedValue]);

  //인풋 OnKeyUp시 작동함수
  function InputOnKeyUp(e) {
    //온키업 한 키가 엔터 && 버튼도 활성화되어있을때 아래 조건문에 들어가서 -> 댓글모음 양식 배열에 추가
    if (e.key === 'Enter' && ButtonBoolean == false) {
      //댓글 배열객체에 추가될 객체 조각 만들기
      ObjectFrame.id = 'kimdoyoung';
      ObjectFrame.comment = TypedValue;
      setInputValueState([...InputValueState, ObjectFrame]);

      console.log(InputValueState);
      //버튼,인풋창,타이핑 된 인풋 전부 초기화
      setButtonBoolean(true);
      setTypedValue('');
      e.target.value = '';
    }
  }

  return (
    <>
      <div className="CommentBox">컴포넌트할 댓글zzz박스</div>
      <div className="postedOneDayAgo">
        <span className="left">1일전</span>
        <span className="right">번역보기</span>
      </div>
      <div className="InputAndButton">
        <img src={emoji} alt={emoji} className="emoji" />
        <input
          className="commentInput"
          onChange={InputOnChange}
          onKeyUp={InputOnKeyUp}
          defaultValue={TypedValue}
        />
        <button
          className="commentButton"
          disabled={ButtonBoolean}
          // onClick={ButtonClick}
        >
          게시
        </button>
      </div>
    </>
  );
}
export default CommentBox;
