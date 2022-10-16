import React from 'react';

const RECOMMEND_DATA = [
  {
    id: 'Sonny123',
    img: 'https://image.shutterstock.com/image-photo/handsome-unshaven-young-darkskinned-male-600w-640011838.jpg',
    name: 'Sonny',
  },
  {
    id: 'Christmas',
    img: 'https://image.shutterstock.com/image-photo/young-woman-curly-hair-laughing-600w-1687578475.jpg',
    name: 'Chris',
  },
  {
    id: 'HolyWater',
    img: 'https://image.shutterstock.com/image-photo/portrait-young-blonde-stylish-girl-600w-1031318971.jpg',
    name: 'seongsu',
  },
];
function MainAside() {
  return (
    <aside>
      <div className="recommenduser">
        <span className="bigUserIcon Img" />
        <div>
          <span className="boldWeight">tjdtnxkrmfoa</span>
          <span className="greyFont">박성수</span>
        </div>
        <span className="bluefont">전환</span>
      </div>
      <div className="recommendbox">
        <div id="recommendMenu">
          <span className="greyFont boldWeight">회원님을 위한 추천</span>
          <span className="fontSmall">모두보기</span>
        </div>
        <ul>
          {RECOMMEND_DATA.map((item, index) => (
            <li key={index} className="recommenduser">
              <img className="recommendIcon" src={item.img} />
              <div>
                <span className="boldWeight">{item.id}</span>
                <span className="greyFont">{item.name}</span>
              </div>
              <div>
                <span className="bluefont">팔로우</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}

export default MainAside;
