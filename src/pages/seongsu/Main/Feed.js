import React, { useState, useEffect } from 'react';

import FeedComment from './FeedContent';

function Feed() {
  const [feedData, setFeedData] = useState(null);

  useEffect(() => {
    fetch('/data/feedData.json')
      .then(res => res.json())
      .then(result => setFeedData(result));
  }, []);

  return (
    <>
      {feedData?.map(item => (
        <FeedComment
          key={item.id}
          userName={item.username}
          userImg={item.user_img}
          articlePhoto={item.article_photo_url}
          content={item.article_content}
          like={item.likecount}
        />
      ))}
    </>
  );
}

export default Feed;
