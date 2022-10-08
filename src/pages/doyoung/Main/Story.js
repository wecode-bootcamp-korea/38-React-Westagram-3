import React from 'react';
import storyPhoto from '../../../assets/doyoung/storyPhoto.png';

function Story() {
  function ComponentOfEachStory() {
    return (
      <div className="eachStory">
        <img src={storyPhoto} className="storyPhoto" />
        <div>_rianess</div>
      </div>
    );
  }
  return (
    <div className="Story">
      <ComponentOfEachStory />
      <ComponentOfEachStory />
      <ComponentOfEachStory />
      <ComponentOfEachStory />
      <ComponentOfEachStory />
      <ComponentOfEachStory />
      <ComponentOfEachStory />
    </div>
  );
}

export default Story;
