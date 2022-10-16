import React from 'react';
import MainArticle from './MainArticle';
import MainAside from './MainAside';
import MainHeader from './MainHeader';
import './Main.scss';

function Main() {
  return (
    <>
      <MainHeader />
      <div className="mainAndAside">
        <MainArticle />
        <MainAside />
      </div>
    </>
  );
}

export default Main;
