import React from "react";
import Card from "../layout/card";
import "./main.scss";
import MainList from "./main_list";

const Main = () => {
  return (
    <section className="main">
      <div className="close_box">
        <Card>
          <h1 className="title">마감임박</h1>
          <MainList />
        </Card>
      </div>
      <div className="popular_box">
        <Card>
          <h1 className="title">인기경매</h1>
          <MainList />
        </Card>
      </div>
      <div className="new_box">
        <Card>
          <h1 className="title">최신경매</h1>
          <MainList />
        </Card>
      </div>
    </section>
  );
};

export default Main;
