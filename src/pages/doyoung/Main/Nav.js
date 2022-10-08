import React from 'react';
import home from '../../../assets/doyoung/home.png';
import dm from '../../../assets/doyoung/dm.png';
import plus from '../../../assets/doyoung/plus.png';
import compass from '../../../assets/doyoung/compass.png';
import whiteHeart from '../../../assets/doyoung/whiteHeart.png';
import mypic from '../../../assets/doyoung/mypic.png';
function Nav() {
  return (
    <div className="Nav">
      <div className="NavLeft">Westagram</div>
      <input className="NavInput" />
      <div className="NavRight">
        <img src={home} alt="home" className="NavRightImg" />
        <img src={dm} alt="dm" className="NavRightImg" />
        <img src={plus} alt="plus" className="NavRightImg" />
        <img src={compass} alt="compass" className="NavRightImg" />
        <img src={whiteHeart} alt="whiteHeart" className="NavRightImg" />
        <img src={mypic} alt="mypic" className="NavRightImg" />
      </div>
    </div>
  );
}
export default Nav;
