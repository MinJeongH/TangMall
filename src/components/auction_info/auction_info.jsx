import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../layout/card";
import InfoList from "./info_list";
import "./auction_info.scss";

const AuctionInfo = () => {
  const [viewsort, setViewsort] = useState(false);
  const { menu } = useParams();

  const clickView = () => {
    setViewsort((prev) => !prev);
  };

  return (
    <section className="info_container">
      <div className="info_header">
        <h1 className="title">{menu}</h1>
        <div className="right_box">
          <input type="text" name="info_search" placeholder="   Search" />
          <img
            src="/search_icon.svg"
            alt="search icon"
            className="search_icon"
          />
          <div className="sort">
            <div className="sort_main">
              <p>최신순</p>
              {viewsort ? (
                <img
                  src="/arrow_up_icon.svg"
                  alt="sort_icon_u"
                  className="sort_icon"
                  onClick={clickView}
                />
              ) : (
                <img
                  src="/arrow_down_icon.svg"
                  alt="sort_icon_d"
                  className="sort_icon"
                  onClick={clickView}
                />
              )}
            </div>
            {viewsort && (
              <div className="sort_menu">
                <p className="sort_text">최신순</p>
                <p className="sort_text">인기순</p>
                <p className="sort_text">낮은가격순</p>
                <p className="sort_text">높은가격순</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Card>
        <InfoList />
      </Card>
    </section>
  );
};

export default AuctionInfo;
