import React from "react";
import "./item.scss";

const Item = (props) => {
  return (
    <section className="item">
      <div className="img_box">
        <img src="sample.png" alt="img" />
      </div>
      <h1 className="item_title">가방 판매합니다</h1>
      <div className="text">
        <div className="text_top">
          <div className="cat_id">
            <p className="category">잡화</p>
            <p className="id">happy</p>
          </div>
          <p className="time">남은시간 : 1h</p>
        </div>
        <div className="prices">
          <div className="start">
            <p className="p_text">시작가</p>
            <p className="p_point">3,000P</p>
          </div>
          <div className="now">
            <p className="p_text">현재가</p>
            <p className="p_point">5,000P</p>
          </div>
          <div className="immediate">
            <p className="p_text">즉시구매가</p>
            <p className="p_point">8,000P</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Item;
