import React from 'react';
import './TeamNav.scss';
import { Link } from 'react-router-dom';

function TeamNav() {
  const TeamMemberArray = [
    { name: 'SeongSu', urlmain: '/seongsu', urllogin: '/seongsu/login' },
    { name: 'DoYoung', urlmain: '/doyoung', urllogin: '/doyoung/login' },
    { name: 'YuJin', urlmain: 'yujin', urllogin: '/yujin/login' },
    { name: 'WooJong', urlmain: '/woojong', urllogin: '/woojong/login' },
  ];

  function TeamNavLoginButton() {
    return TeamMemberArray.map(person => (
      <button className="realButton">
        <Link className="NavButtonLink" to={person.urllogin}>
          {person.name}
        </Link>
      </button>
    ));
  }

  function TeamNavMainButton() {
    return TeamMemberArray.map(person => (
      <button className="realButton">
        <Link className="NavButtonLink" to={person.urlmain}>
          {person.name}
        </Link>
      </button>
    ));
  }
  return (
    <div className="TeamNav">
      <div className="TeamNavTop">
        <span className="TeamNavTopItem">Login Page</span>
        <span className="TeamNavTopItem">Main Page</span>
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
