import React from 'react';
import './Main.scss';

const Main = () => {
  return (
    <div className="main">
      <nav className="top_bar">
        <div className="icon_left">
          <a href="#" alt="https://www.instagram.com/">
            <img
              className="logo"
              src="images/yujin/instagram.png"
              alt="instagramIcon"
            />
          </a>
          <div className="eng_logo">westagram</div>
        </div>
        <div className="search_container">
          <button className="search_button">
            <i className="fa-solid fa-magnifying-glass" />
            <input className="search_box" placeholder="검색" type="text" />
          </button>
        </div>
        <div className="icon_right">
          <a href="#" alt="https://www.instagram.com/explore">
            <img
              className="explore"
              src="images/yujin/explore.png"
              alt="exploreIcon"
            />
          </a>
          <a href="#" alt="https://www.instagram.com/activity">
            <img
              className="heart"
              src="images/yujin/heart.png"
              alt="heartIcon"
            />
          </a>
          <a href="#" alt="https://www.instagram.com/profile">
            <img
              className="profile"
              src="images/yujin/profile.png"
              alt="profileIcon"
            />
          </a>
        </div>
      </nav>

      <div className="main_container">
        <div className="feed">
          <article className="post">
            <div className="post_profile">
              <div className="post_profile_left">
                <div className="profile-img-box">
                  <img
                    className="post_profile_pic"
                    src="images/yujin/teddy.jpg"
                  />
                </div>
                <a href="#" className="post_profile_name">
                  <b className="makeIdBold">yuzinnee</b>
                </a>
              </div>
              <div className="post_profile_dot_icon">
                <a href="#">
                  <i className="fa-solid fa-ellipsis" />
                </a>
              </div>
            </div>
            <img
              className="post_picture"
              src="images/yujin//newyork.jpg"
              alt="pic"
            />
            <div className="feed_icon">
              <div className="feed_icon_left">
                <img src="images/yujin/heart.png" className="feed_icon_heart" />
                <img src="images/yujin/chat.png" className="feed_icon_chat" />
                <img
                  src="images/yujin/direct.png"
                  className="feed_icon_direct"
                />
              </div>
              <div className="feed_icon_right">
                <img
                  src="images/yujin//bookmark.png"
                  className="feed_icon_bookmark"
                />
              </div>
            </div>
            <div className="who_like">
              <div className="who_info">
                <img className="who_pic" src="images/yujin//teddy.jpg" />
                <a href="" className="who_name">
                  <b className="makeIdBold">yuzinnee</b>
                </a>{' '}
                님 외<b className="makeIdBold">7,096,816명</b>이 좋아합니다
              </div>
            </div>
            <div className="feed_content">
              <a href="" className="writer_name">
                <b className="makeIdBold">yuzinnee</b>
              </a>{' '}
              가보고 싶은 뉴욕 🤩 여행 가게 된다면...
              <button className="more_see">더 보기</button>
              <div className="when_upload">1일 전</div>
            </div>

            <div className="comment_box">
              <div className="comment_box_left">
                <p className="user_name">mo_eden</p>
                <div className="feed_comment_content">
                  뉴욕하면 베이글이지 !!🥯
                </div>
              </div>
              <div className="comment_box_right">
                <img
                  className="comment_icon_like"
                  src="images/yujin/heart.png"
                />
              </div>
            </div>
            <div className="comment_result" />
            <form className="feed_comments_write">
              <input
                className="feed_comments_write_box"
                placeholder="    댓글 달기..."
                type="text"
              />
              <button className="comment_upload">
                <b className="makeIdBold">게시</b>
              </button>
            </form>
          </article>
        </div>

        <div className="main_right">
          <div className="account">
            <img className="profile_pic" src="images/yujin/teddy.jpg" />
            <div className="account_info">
              <a href="" className="account_name">
                <b className="makeIdBold">yuzinnee</b>
              </a>
              <span className="info">yuzinnee | 유진</span>
            </div>
          </div>

          <div className="story">
            <div className="story_bar">
              <div className="story_text">스토리</div>
              <a href="#" className="story_all_see">
                <b className="makeIdBold">모두 보기</b>
              </a>
            </div>
            <div className="story_people">
              <div className="story_1">
                <div className="story_line">
                  <img
                    className="story_pic"
                    src="images/yujin/profile_pic.png"
                  />
                </div>
                <div className="story_info">
                  <a href="" className="story_name">
                    <b className="makeIdBold">this_is_westa</b>
                  </a>
                  <span className="time">38분 전</span>
                </div>
              </div>
              <div className="story_2">
                <div className="story_line">
                  <img
                    className="story_pic"
                    src="images/yujin/profile_pic.png"
                  />
                </div>
                <div className="story_info">
                  <a href="" className="story_name">
                    <b className="makeIdBold">hello_i_am_yj</b>
                  </a>
                  <span className="time">5분 전</span>
                </div>
              </div>
              <div className="story_3">
                <div className="story_line">
                  <img
                    className="story_pic"
                    src="images/yujin/profile_pic.png"
                  />
                </div>
                <div className="story_info">
                  <a href="" className="story_name">
                    <b className="makeIdBold">what_a_lovely_day</b>
                  </a>
                  <span className="time">2시간 전</span>
                </div>
              </div>
              <div className="story_4">
                <div className="story_line">
                  <img
                    className="story_pic"
                    src="images/yujin/profile_pic.png"
                  />
                </div>
                <div className="story_info">
                  <a href="" className="story_name">
                    <b className="makeIdBold">get_set_go</b>
                  </a>
                  <span className="time">12분 전</span>
                </div>
              </div>
            </div>
          </div>

          <div className="recommend">
            <div className="recommend_bar">
              <div className="recommend_text">회원님을 위한 추천</div>
              <a href="#" className="recommend_all_see">
                <b className="makeIdBold">모두 보기</b>
              </a>
            </div>
            <div className="recommend_people">
              <div className="recommend_1">
                <div className="recommend_people_left">
                  <img
                    className="recommend_pic"
                    src="images/yujin//profile_pic.png"
                  />
                  <div className="recommend_info">
                    <a href="" className="recommend_name">
                      <b className="makeIdBold">who_are_u</b>
                    </a>
                    <span className="relation">get_set_go님 외 2명이 ...</span>
                  </div>
                </div>
                <div className="recommend_people_right">
                  <a href="#" className="follow">
                    <b className="makeIdBold">팔로우</b>
                  </a>
                </div>
              </div>
              <div className="recommend_1">
                <div className="recommend_people_left">
                  <img
                    className="recommend_pic"
                    src="images/yujin//profile_pic.png"
                  />
                  <div className="recommend_info">
                    <a href="" className="recommend_name">
                      <b className="makeIdBold">im_a_developer</b>
                    </a>
                    <span className="relation">we_coder님 외 1명이 ...</span>
                  </div>
                </div>
                <div className="recommend_people_right">
                  <a href="#" className="follow">
                    <b className="makeIdBold">팔로우</b>
                  </a>
                </div>
              </div>
              <div className="recommend_1">
                <div className="recommend_people_left">
                  <img
                    className="recommend_pic"
                    src="images/yujin//profile_pic.png"
                  />
                  <div className="recommend_info">
                    <a href="" className="recommend_name">
                      <b className="makeIdBold">front_end</b>
                    </a>
                    <span className="relation">dong_won님 외 3명이 ...</span>
                  </div>
                </div>
                <div className="recommend_people_right">
                  <a href="#" className="follow">
                    <b className="makeIdBold">팔로우</b>
                  </a>
                </div>
              </div>
              <div className="recommend_1">
                <div className="recommend_people_left">
                  <img
                    className="recommend_pic"
                    src="images/yujin//profile_pic.png"
                  />
                  <div className="recommend_info">
                    <a href="" className="recommend_name">
                      <b className="makeIdBold">nice_to_meet_u</b>
                    </a>
                    <span className="relation">woo_seong님 외 5명이 ...</span>
                  </div>
                </div>
                <div className="recommend_people_right">
                  <a href="#" className="follow">
                    <b className="makeIdBold">팔로우</b>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="westa_info">
            westagram 정보 · 지원 · 홍보 센터 · API · 채용 정보 ·
            개인정보처리방침 · 약관 · 디렉터리 · 프로필 · 해시태그 · 언어
          </div>
          <div className="copyright_info">ⓒ 2022 WESTAGRAM</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
