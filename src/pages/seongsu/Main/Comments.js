import React from 'react';

function Comments({ text, id, like, clickDelete, clickLike }) {
  return (
    <li key={id}>
      <div>
        <span className="boldWeight">tjdtnxkrmfoa </span>
        <span> {text}</span>
      </div>
      <div>
        <span
          id={id}
          onClick={clickLike}
          className={like ? 'fullHeartSmall' : 'emptyHeart'}
        />
        <span id={id} onClick={clickDelete} className="removeBtn" />
      </div>
    </li>
  );
}

export default Comments;
