import React from "react";
import { Link } from "react-router-dom";
import Card from "../layout/card";
import "./main.scss";
import MainList from "./main_list";

const Main = () => {
  return (
    <section className="main">
      <div className="close_box">
        <Card>
          <Link to={"/auction/마감임박"}>
            <h1 className="title">마감임박</h1>
          </Link>
          <MainList />
        </Card>
      </div>
      <div className="popular_box">
        <Card>
          <Link to={"/auction/인기경매"}>
            <h1 className="title">인기경매</h1>
          </Link>
          <MainList />
        </Card>
      </div>
      <div className="new_box">
        <Card>
          <Link to={"/auction/최신경매"}>
            <h1 className="title">최신경매</h1>
          </Link>
          <MainList />
        </Card>
      </div>
    </section>
  );
};

export default Main;
