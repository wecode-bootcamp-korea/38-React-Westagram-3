import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.scss';
import Nav from './Nav';
import Feed from './Feed';
import Story from './Story';
import AsideTop from './AsideTop';
import AsideBottom from './AsideBottom';

function Main() {
  const [feedMockDataState, setfeedMockDataState] = useState([]);

  useEffect(() => {
    fetch('/data/feedMockData.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setfeedMockDataState(data);
      });
  }, []);

  //테스트용
  // function test123() {
  //   console.log(feedMockDataState);
  // }
  return (
    <div className="Main">
      <Nav />
      <div className="MainWithoutNav">
        <div className="MainLeft">
          <Story />
          <div>
            {feedMockDataState.map(item => {
              return (
                <Feed
                  key={item.id}
                  profileImg={item.profileImg}
                  accountId={item.accountId}
                  feedImg={item.feedImg}
                  likeNumber={item.likeNumber}
                  feedContentsText={item.feedContentsText}
                  postedTime={item.postedTime}
                />
              );
            })}
          </div>
        </div>
        <div className="MainRight">
          <AsideTop />
          <AsideBottom />
        </div>
      </div>
    </div>
  );
}

export default Main;
