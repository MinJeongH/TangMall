import React from "react";
import { useParams } from "react-router-dom";
import Card from "../layout/card";
import InfoList from "./info_list";

const AuctionInfo = () => {
  const { menu } = useParams();

  return (
    <section>
      <div>
        <h1>{menu}</h1>
        <input type="text" />
        <img src="/search_icon.svg" alt="search icon" />
        <div className="sort">
          <p>최신순</p>
          <img src="/arrow_dowm_icon.svg" alt="sort_icon" />
        </div>
      </div>
      <Card>
        <InfoList />
      </Card>
    </section>
  );
};

export default AuctionInfo;
