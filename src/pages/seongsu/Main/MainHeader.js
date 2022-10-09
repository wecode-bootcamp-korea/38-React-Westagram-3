import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import userData from './userData';

function MainHeader() {
  const [dropBar, setDropBar] = useState(false);
  const navigate = useNavigate();
  function dropClick() {
    setDropBar(!dropBar);
  }
  const [searchValue, setSearchValue] = useState('');

  function search(event) {
    setSearchValue(event.target.value);
  }
  function goLogin() {
    navigate('/seongsu/login');
  }
  return (
    <header className="header zindex">
      <div className="logosize">
        <h1>Seongsutagram</h1>
      </div>
      <input
        onChange={search}
        value={searchValue}
        type="text"
        placeholder="검색"
      />
      <ul id="searchBar">
        {userData
          .filter(x => {
            if (searchValue == '') {
              return false;
            } else if (x.includes(searchValue)) {
              return x;
            }
          })
          .map((x, i) => (
            <li key={i}>
              <div>
                <span className="userImg" />
                <span>{x}</span>
              </div>
            </li>
          ))}
      </ul>

      <ul id="itembox">
        <li className="homeIcon" />
        <li className="dmIcon" />
        <li className="addIcon" />
        <li className="compassIcon" />
        <li className="heartIcon" />
        <ul className="menu">
          <li>
            <a
              onClick={dropClick}
              id="menuIcon"
              href="#"
              className="userIcon"
            />
            {dropBar ? (
              <ul id="dropMenu">
                <li>
                  <span className="profileIcon" />
                  <a href="#">프로필</a>
                </li>
                <li>
                  <span className="scrapIcon" />
                  <a href="#">저장됨</a>
                </li>
                <li>
                  <span className="settingIcon" />
                  <a href="#">설정</a>
                </li>
                <li>
                  <a href="#" onClick={goLogin}>
                    로그아웃
                  </a>
                </li>
              </ul>
            ) : null}
          </li>
        </ul>
      </ul>
    </header>
  );
}

export default MainHeader;
