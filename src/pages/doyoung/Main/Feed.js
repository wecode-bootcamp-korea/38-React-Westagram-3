import React from 'react';
import rian from '../../../assets/doyoung/rian.png';
import dot3 from '../../../assets/doyoung/dot3.png';

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
  return (
    <div className="Feed">
      <IdBox />
      <div className="PhotoBox">사진</div>
      <div className="LikeBox">좋아요 댓글 공유 저장</div>
      <div className="NumberOfLike">~명이 좋아합니다</div>
      <div className="discribeBox">게시자 아이디 내용</div>
      <div className="CommentBox">컴포넌트할 댓글박스@@@</div>
      <div className="postedOneDayAgo">1일전 번역보기</div>
      <div className="InputAndButton">이모지 댓글인풋 게시버튼</div>
    </div>
  );
}
export default Feed;
