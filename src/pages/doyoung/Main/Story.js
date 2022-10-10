import React from 'react';
import { storyConstData } from './storyConstDaTa';
import './Main.scss';

function Story() {
  return (
    <div className="Story">
      {storyConstData.map(item => {
        return (
          <div key={item.id} className="eachStory">
            <img src={item.src} className="storyPhoto" />
            <div>{item.userId}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Story;
