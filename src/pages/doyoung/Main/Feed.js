import React from 'react';
import rian from '../../../assets/doyoung/rian.png';
import dot3 from '../../../assets/doyoung/dot3.png';
import cat from '../../../assets/doyoung/cat.png';
import whiteHeart from '../../../assets/doyoung/whiteHeart.png';
import commentIcon from '../../../assets/doyoung/commentIcon.png';
import dm from '../../../assets/doyoung/dm.png';
import saveIcon from '../../../assets/doyoung/saveIcon.png';

function Feed() {
  function IdBox() {
    return (
      <div className="IdBox">
        <div className="IdBoxLeft">
          <img src={rian} className="RianPhotoOnFeed" alt={rian} />
          <span className="rianIdArea">_rianess</span>
        </div>
        <img src={dot3} className="dot3" alt={rian} />
      </div>
    );
  }

  function PhotoBox() {
    return (
      <div className="PhotoBox">
        <img src={cat} className="cat" alt={cat} />
      </div>
    );
  }

  function LikeBox() {
    return (
      <div className="LikeBox">
        <div>
          <img
            src={whiteHeart}
            className="whiteHeart feedIcon"
            alt={whiteHeart}
          />
          <img
            src={commentIcon}
            className="commentIcon feedIcon"
            alt={commentIcon}
          />
          <img src={dm} className="dm feedIcon" alt={dm} />
        </div>
        <div>
          <img src={saveIcon} className="saveIcon feedIcon" alt={saveIcon} />
        </div>
      </div>
    );
  }
  return (
    <div className="Feed">
      <IdBox />
      <PhotoBox />
      <LikeBox />
      <div className="NumberOfLike">~명이 좋아합니다</div>
      <div className="discribeBox">게시자 아이디 내용</div>
      <div className="CommentBox">컴포넌트할 댓글박스@@@</div>
      <div className="postedOneDayAgo">1일전 번역보기</div>
      <div className="InputAndButton">이모지 댓글인풋 게시버튼</div>
    </div>
  );
}
export default Feed;
