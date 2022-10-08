import React from 'react';
import rian from '../../../assets/doyoung/rian.png';
import dot3 from '../../../assets/doyoung/dot3.png';
import cat from '../../../assets/doyoung/cat.png';
import whiteHeart from '../../../assets/doyoung/whiteHeart.png';
import commentIcon from '../../../assets/doyoung/commentIcon.png';
import dm from '../../../assets/doyoung/dm.png';
import saveIcon from '../../../assets/doyoung/saveIcon.png';
import emoji from '../../../assets/doyoung/emoji.png';

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

  function DiscribeBox() {
    return (
      <div className="discribeBox">
        <span className="discribeBoxId">_rianess </span>
        <span> 고양이사진~~!!!!!!!!!!! </span>
      </div>
    );
  }

  function NumberOfLike() {
    return (
      <div className="NumberOfLike">
        kimdoyoung12345님 외 4,325,721명이 좋아합니다.
      </div>
    );
  }

  function PostedOneDayAgo() {
    return (
      <div className="postedOneDayAgo">
        <span className="left">1일전</span>
        <span className="right">번역보기</span>
      </div>
    );
  }

  function InputAndButton() {
    return (
      <div className="InputAndButton">
        <img src={emoji} alt={emoji} className="emoji" />
        <input className="commentInput" />
        <button className="commentButton">게시</button>
      </div>
    );
  }
  return (
    <div className="Feed">
      <IdBox />
      <PhotoBox />
      <LikeBox />
      <NumberOfLike />
      <DiscribeBox />
      <div className="CommentBox">kimdoyoung12345 컴포넌트할 댓글박스@@@</div>
      <PostedOneDayAgo />
      <InputAndButton />
    </div>
  );
}
export default Feed;
