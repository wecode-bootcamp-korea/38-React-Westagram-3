import React, { useState, useEffect } from 'react';
import Feed from './Feed';

function MainArticle() {
  const [storyData, setStoryData] = useState(null);

  useEffect(() => {
    fetch('/data/storyData.json')
      .then(res => res.json())
      .then(result => setStoryData(result));
  }, []);

  return (
    <div>
      <div className="mainAndAside">
        <main>
          <ul className="storybox box">
            {storyData &&
              storyData.map((item, index) => (
                <li className="story " key={index}>
                  <div>
                    <span className="storyIcon" />
                    <img src={item.img} className="bigUserIcon" />
                  </div>
                  <span>{item.id}</span>
                </li>
              ))}
          </ul>
          <Feed />
        </main>
      </div>
    </div>
  );
}

export default MainArticle;
