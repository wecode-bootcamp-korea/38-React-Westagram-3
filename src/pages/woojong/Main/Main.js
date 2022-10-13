import React, { useState } from 'react';

const Main = () => {
  // const [color, setColor] = useState('red');
  const [greeting, setGreeting] = useState('world');
  const [reply, setReply] = useState('');

  function foo() {
    setGreeting('hello world');
  }
  let hello = 'world';
  console.log(reply);
  function getReply(event) {
    setReply(event.target.value);
  }
  return (
    <div>
      <h1>댓글창</h1>
      <ul>
        <li>hello world</li>
        <li>{greeting}</li>
      </ul>
      <input onChange={getReply} placeholder="댓글입력" />
      <button onClick={foo}>댓글추가</button>
      {/* <h1 style={{ backgroundColor: color }}>여기는 메인페이지입니다.</h1>;
      <button onClick={() => setColor('blue')}>색상 바꾸기</button> */}
    </div>
  );
};

export default Main;
