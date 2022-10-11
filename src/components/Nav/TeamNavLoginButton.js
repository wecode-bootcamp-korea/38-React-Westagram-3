import React from 'react';
import { TeamMemberArray } from './TeamMemberArray';
import { Link } from 'react-router-dom';

function TeamNavLoginButton() {
  return TeamMemberArray.map((person, index) => (
    <button key={index} className="realButton">
      <Link className="NavButtonLink" to={person.urllogin}>
        {person.name}
      </Link>
    </button>
  ));
}

export default TeamNavLoginButton;
