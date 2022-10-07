import React from 'react';
import './TeamNav.scss';
import { Link } from 'react-router-dom';

function TeamNav() {
  const TeamMemberArray = [
    { name: '성수', urlmain: '/seongsu', urllogin: '/seongsu/login' },
    { name: '도영', urlmain: '/doyoung', urllogin: '/doyoung/login' },
    { name: '유진', urlmain: 'yujin', urllogin: '/yujin/login' },
    { name: '우종', urlmain: '/woojong', urllogin: '/woojong/login' },
  ];

  function TeamNavLoginButton() {
    return TeamMemberArray.map(person => (
      <button>
        <Link to={person.urllogin}>{person.name}메인</Link>
      </button>
    ));
  }

  function TeamNavMainButton() {
    return TeamMemberArray.map(person => (
      <button>
        <Link to={person.urlmain}>{person.name}메인</Link>
      </button>
    ));
  }
  return (
    <div className="TeamNav">
      <div className="TeamNavTop">
        <span className="TeamNavTopItem">Login 페이지 바로가기</span>
        <span className="TeamNavTopItem">Main 페이지 바로가기</span>
      </div>
      <div className="TeamNavBotton">
        <span>
          <TeamNavLoginButton className="TeamNavButton" />
        </span>
        <span>
          <TeamNavMainButton className="TeamNavButton" />
        </span>
      </div>
    </div>
  );
}

export default TeamNav;
