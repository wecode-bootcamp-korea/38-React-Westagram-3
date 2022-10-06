import React from 'react';
import './TeamNav.scss';

function TeamNav() {
  const TeamMemberArray = ['도영', '유진', '성수', '우종'];

  function TeamNavButton() {
    return TeamMemberArray.map(person => <button>{person}</button>);
  }

  return (
    <div className="TeamNav">
      <div className="TeamNavTop">
        <span className="TeamNavTopItem">Login 페이지 바로가기</span>
        <span className="TeamNavTopItem">Main 페이지 바로가기</span>
      </div>
      <div className="TeamNavBotton">
        <span>
          <TeamNavButton className="TeamNavButton" />
        </span>
        <span>
          <TeamNavButton className="TeamNavButton" />
        </span>
      </div>
    </div>
  );
}

export default TeamNav;
