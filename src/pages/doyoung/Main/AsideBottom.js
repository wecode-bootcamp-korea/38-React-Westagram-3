import React from 'react';
import { asideBottomConstData } from './asideBottomConstData';

function AsideBottom() {
  return (
    <div className="AsideBottom">
      <div className="container">
        {' '}
        {asideBottomConstData.map(item => {
          return <span className="item">{item.item}. </span>;
        })}
      </div>
    </div>
  );
}
export default AsideBottom;
