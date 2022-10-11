import React from 'react';
import './TeamNav.scss';
import { Link } from 'react-router-dom';
import { TeamMemberArray } from './TeamMemberArray';
import TeamNavLoginButton from './TeamNavLoginButton';
import TeamNavMainButton from './TeamNavMainButton';

function TeamNav() {
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
