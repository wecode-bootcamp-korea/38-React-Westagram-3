import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Main.scss';
import Nav from './Nav';
import Feed from './Feed';
import Story from './Story';
import AsideTop from './AsideTop';
import AsideBottom from './AsideBottom';

function Main() {
  return (
    <div className="Main">
      <Nav />
      <div className="MainWithoutNav">
        <div className="MainLeft">
          <Story />
          <Feed />
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
