import React, { useState } from 'react';
import { useEffect } from 'react';
import emoji from '../../../assets/doyoung/emoji.png';
import whiteHeart from '../../../assets/doyoung/whiteHeart.png';
import xxx from '../../../assets/doyoung/xxx.png';

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
      {
        id: Date.now(),
        writter: 'kimdoyoung12345',
        comment: TypedValue,
      }, //유니크 키 만들어야됨
    ]);
    setButtonBoolean(true);
    setTypedValue('');
    console.log(InputValueState);
  }

  function CommentComponent({ comment, writter }) {
    return (
      <div className="commentLine">
        <span className="commentBoxId">{writter} </span>
        <span className="commentValue">{comment}</span>
        <span>
          <img
            alt={whiteHeart}
            className="commentWhiteHeart commentIMG"
            src={whiteHeart}
          />
          <img alt={xxx} className="commentxxx commentIMG" src={xxx} />
        </span>
      </div>
    );
  }
  return (
    <>
      <div className="CommentBox">
        {InputValueState.map(item => (
          <CommentComponent comment={item.comment} writter={item.writter} />
        ))}
      </div>
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
