import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Card from "../layout/card";
import InfoList from "./info_list";
import "./auction_info.scss";
import { useRecoilState, useRecoilValue } from "recoil";
import { itemSortListState } from "../../common/recoil/auction_sort";

const AuctionInfo = () => {
  const [sortName, setSortName] = useRecoilState(itemSortListState);
  const { menu } = useParams();

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
          <select
            name="sort"
            id="item_sort"
            value={sortName}
            onChange={(e) => {
              setSortName(e.target.value);
            }}
          >
            <option value="최신순">최신순</option>
            <option value="인기순">인기순</option>
            <option value="낮은가격순">낮은가격순</option>
            <option value="높은가격순">높은가격순</option>
          </select>
        </div>
      </div>
      <Card>
        <InfoList />
      </Card>
    </section>
  );
};

export default AuctionInfo;
