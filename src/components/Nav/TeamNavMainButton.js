import React from 'react';
import { TeamMemberArray } from './TeamMemberArray';
import { Link } from 'react-router-dom';

function TeamNavMainButton() {
  return TeamMemberArray.map((person, index) => (
    <button key={index} className="realButton">
      <Link className="NavButtonLink" to={person.urlmain}>
        {person.name}
      </Link>
    </button>
  ));
}

export default TeamNavMainButton;
