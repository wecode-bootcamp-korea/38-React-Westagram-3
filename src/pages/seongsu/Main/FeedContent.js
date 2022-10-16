import React, { useState } from 'react';
import Comments from './Comments';

function FeedComment({ userName, userImg, like, articlePhoto, content }) {
  const [commentsValue, setCommentsValue] = useState('');
  const [commentsArr, setCommentsArr] = useState([]);

  // let comments = [...commentsArr];
  function onChange(event) {
    setCommentsValue(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    setCommentsArr([
      ...commentsArr,
      {
        id: `${Date.now()}`,
        text: `${commentsValue}`,
        like: false,
      },
    ]);
    setCommentsValue('');
  }

  function clickDelete(event) {
    setCommentsArr(commentsArr.filter(item => item.id != event.target.id));
  }

  function clickLike(event) {
    setCommentsArr(
      commentsArr.map(item => {
        if (item.id == event.target.id) {
          return { ...item, like: !item.like };
        }
        return item;
      })
    );
  }

  return (
    <div className="articlebox box">
      <div id="articlename">
        <img className="userIcon" src={userImg} />
        <span className="name">{userName}</span>
        <span className="moreIcon" />
      </div>
      <img className="photo" src={articlePhoto} />
      <div className="toolbox">
        <div className="likebox">
          <span className="heartIcon" />
          <span className="commentsIcon" />
          <span className="dmIcon" />
        </div>
        <div className="moreIcon position" />
        <div className="scrapIcon" />
      </div>
      <div className="commentbox">
        <div>
          <span className="boldWeight">tjdtnxkrmfoa</span>
          <span>님외 {like} 명이 좋아합니다</span>
        </div>
        <div>
          <span className="boldWeight">{userName}</span>
          <span>{content}</span>
        </div>
        <div>
          <ul id="commentlist">
            {commentsArr.map((el, index) => (
              <Comments
                key={index}
                text={el.text}
                id={el.id}
                like={el.like}
                clickDelete={clickDelete}
                clickLike={clickLike}
              />
            ))}
          </ul>
        </div>
      </div>
      <form onSubmit={onSubmit} className="commentstool">
        <span className="smileIcon" />
        <input
          onChange={onChange}
          value={commentsValue}
          id="commentInput"
          placeholder="댓글 달기..."
        />
        <button id="commentbtn" className="bluefont">
          게시
        </button>
      </form>
    </div>
  );
}

export default FeedComment;
