import React from 'react';
import asideTopIMG from '../../../assets/doyoung/asideTopIMG.png';
import whiteHeart from '../../../assets/doyoung/whiteHeart.png';
import mypic from '../../../assets/doyoung/mypic.png';
import RecommendBox from './RecommendBox';
function AsideTop() {
  return (
    <div className="AsideTop">
      <div className="AsideTop1">
        <img src={mypic} className="mypic" />
        <div className="center">
          <div className="top">kimdoyoung12345</div>
          <div className="bot">김도영</div>
        </div>
        <div className="idSwitch">전환</div>
      </div>
      <div className="AsideTop2">
        <div className="top">회원님을 위한 추천</div>
        <div className="bot">모두 보기</div>
      </div>
      <RecommendBox />
    </div>
  );
}
export default AsideTop;
