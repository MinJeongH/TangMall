import React from "react";
import "./item_detail.scss";

const ItemDetail = () => {
  return (
    <section className="detail_con">
      <div className="item_info">
        <div className="title_bar">
          <h1 className="title">가방 판매합니다</h1>
          <h2 className="title">남은시간 : 1시간 12분</h2>
        </div>
        <div className="item_auction">
          <div className="img_box">
            <img className="item_img" src="sample.png" alt="item_img" />
          </div>
          <div className="item_text">
            <div className="item_price">
              <div className="item_ptext">
                <p className="ptitle">시작가</p>
                <p className="ptitle">현재가</p>
                <p className="ptitle">즉시구매가</p>
                <p className="ptitle">판매자</p>
              </div>
              <div className="item_ptext">
                <p className="item_pnum">3,000 P</p>
                <p className="item_pnum">4,500 P</p>
                <p className="item_pnum">6,000 P</p>
                <p className="item_pnum">영희</p>
              </div>
            </div>
            <div className="item_btn">
              <div className="item_bid">
                <input className="bid_input" type="1000" placeholder="1000" />
                <p className="pointP">P</p>
                <button className="btn_s">입찰하기</button>
              </div>
              <button className="btn_s">즉시구매</button>
            </div>
          </div>
        </div>
      </div>
      <div className="detail_user">
        <p className="exp">상세 설명</p>
      </div>
    </section>
  );
};

export default ItemDetail;
