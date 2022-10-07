import { type } from '@testing-library/user-event/dist/type';
import React from 'react';
import { useState, useReducer } from 'react';
import storyData from './storyData';
import Comments from './Comments';

function MainArticle() {
  const [commentsValue, setCommentsValue] = useState('');
  const [commentsArr, setCommentsArr] = useState([]);

  let comments = [...commentsArr];

  function onChange(event) {
    setCommentsValue(event.target.value);
  }

  function onSubmit(event) {
    event.preventDefault();
    comments = [
      ...comments,
      {
        id: `${Date.now()}`,
        text: `${commentsValue}`,
        like: false,
      },
    ];
    setCommentsArr(comments);
    setCommentsValue('');
  }

  function clickDelete(event) {
    comments = comments.filter(item => item.id != event.target.id);
    setCommentsArr(comments);
  }

  function clickLike(event) {
    comments = comments.map(item => {
      if (item.id == event.target.id) {
        return { ...item, like: !item.like };
      }
      return item;
    });
    setCommentsArr(comments);
  }

  return (
    <div className="mainAndAside">
      <main>
        <ul className="storybox box">
          {storyData.map((item, index) => (
            <li className="story " key={index}>
              <div>
                <span className="storyIcon" />
                <img src={item.img} className="bigUserIcon" />
              </div>
              <span>{item.id}</span>
            </li>
          ))}
        </ul>
        <div className="articlebox box">
          <div id="articlename">
            <span className="userIcon" />
            <span className="name">tjdtnxkrmfoa</span>
            <span className="moreIcon" />
          </div>
          <div className="photo" />
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
              <span className="boldWeight">tjdtnxkrmfoas</span>
              <span>님 여러 명이 좋아합니다</span>
            </div>
            <div>
              <span className="boldWeight">tjdtnxkrmfoas</span>
              <span>게시글 #어쩌고 #저쩌고</span>
            </div>
            <div>
              <ul id="commentlist">
                {comments.map(el => (
                  <Comments
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
      </main>
    </div>
  );
}

export default MainArticle;
