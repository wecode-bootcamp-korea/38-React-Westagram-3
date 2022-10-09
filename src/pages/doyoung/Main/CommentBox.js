import React, { useState } from 'react';
import { useEffect } from 'react';
import emoji from '../../../assets/doyoung/emoji.png';

function CommentBox() {
  //순서대로 : 버튼 활성/비활성에 넣을 스테이트 ,  현재 인풋창에 타이핑된 값 스테이트화 , 댓글submit시 객체형태로 정보저장할 스테이트
  const [ButtonBoolean, setButtonBoolean] = useState(true);
  const [TypedValue, setTypedValue] = useState('');
  const [InputValueState, setInputValueState] = useState([]);

  //인풋창 값 변화발생하면 state 저장해서 갱신
  function inputOnChange(e) {
    setTypedValue(e.target.value);
  }
  //5자 이상이면 버튼활성화
  useEffect(() => {
    console.log(TypedValue);
    if (TypedValue.length >= '1') {
      setButtonBoolean(false);
    } else {
      setButtonBoolean(true);
    }
  }, [TypedValue]);

  function formOnSubmit(e) {
    e.preventDefault(); //이거 안해주면 계속 새로고침된다..
    setInputValueState([
      ...InputValueState,
      { id: 'kimdoyoung12345', comment: TypedValue },
    ]);
    setButtonBoolean(true);
    setTypedValue('');
    console.log(InputValueState);
  }
  return (
    <>
      <div className="CommentBox">dfsa</div>
      <div className="postedOneDayAgo">
        <span className="left">1일전</span>
        <span className="right">번역보기</span>
      </div>
      <div className="inputLine">
        <img src={emoji} alt={emoji} className="emoji" />
        <form className="inputAndButtonForm" onSubmit={formOnSubmit}>
          <input
            className="commentInput"
            onChange={inputOnChange}
            value={TypedValue}
          />
          <button className="commentButton" disabled={ButtonBoolean}>
            게시
          </button>
        </form>
      </div>
    </>
  );
}
export default CommentBox;
