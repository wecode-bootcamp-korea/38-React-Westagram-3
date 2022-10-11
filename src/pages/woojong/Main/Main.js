import React, { useState } from 'react';

const Main = () => {
  const [color, setColor] = useState('red');

  return (
    <>
      <h1 style={{ backgroundColor: color }}>여기는 메인페이지입니다.</h1>;
      <button onClick={() => setColor('blue')}>색상 바꾸기</button>
    </>
  );
};

export default Main;
