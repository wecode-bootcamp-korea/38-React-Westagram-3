import React from 'react';
import './Main.scss';
import { recommendConstData } from './recommendConstData';

function RecommendBox() {
  return (
    <div className="RecommendBox">
      {recommendConstData.map(item => {
        return (
          <div key={item.id} className="container">
            <img src="/images/doyoung/rian.png" className="rian" />
            <div className="middle">
              <div className="name">{item.name}</div>
              <div className="name2">{item.name2}</div>
            </div>
            <div className="follow">팔로우</div>
          </div>
        );
      })}
    </div>
  );
}

export default RecommendBox;
