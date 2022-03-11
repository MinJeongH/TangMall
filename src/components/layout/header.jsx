import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../common/auth/AuthProvider";
import "./header.scss";

const Header = () => {
  const [view, setView] = useState();
  const auth = useAuth();
  const navigate = useNavigate();

  const logoutHandler = (e) => {
    e.preventDefault();
    auth.signout().then((res) => {
      if (res) {
        navigate("/");
      } else alert("로그아웃에 실패하였습니다.");
    });
  };

  return (
    <section className="header">
      <section className="topcontainer">
        <div className="service">
          <div className="noti">
            <p className="title">공지</p>
            <p className="text">공지사항 표시되는 파트입니다.</p>
          </div>
          <div className="event">
            <p className="title">이벤트</p>
            <p className="text">이벤트가 표시되는 파트입니다.</p>
          </div>
        </div>
        {auth.user ? (
          <div className="user">
            <p>{auth.user}</p>
            <div className="logout" onClick={logoutHandler}>
              <img src="/logout_icon.svg" alt="login icon" />
              <p>로그아웃</p>
            </div>
          </div>
        ) : (
          <div className="user">
            <div className="login">
              <Link to="/login" className="link">
                <img src="/login_icon.svg" alt="login icon" />
                로그인
              </Link>
            </div>
            <div className="join">
              <Link to="/registerAgree" className="link">
                <img src="/join_icon.svg" alt="join icon" />
                회원가입
              </Link>
            </div>
          </div>
        )}
      </section>
      <section className="bottomcontainer">
        <Link to={"/"} className="logo_link">
          <div className="logo">
            <img src="/icon_tang 1.svg" alt="logo" />
            <h1>탕탕탕</h1>
          </div>
        </Link>
        <div className="menu">
          <div
            className="menu_list"
            onMouseOver={() => setView(0)}
            onMouseOut={() => setView("")}
          >
            <h1 className={`menu_item ${view === 0 ? "view" : ""}`}>
              경매참여
            </h1>
            <div className={`parti ${view === 0 ? "view" : ""}`}>
              <Link to={"/auction/주방물품"}>
                <p>주방</p>
              </Link>
              <Link to={"/auction/가전제품"}>
                <p>가전</p>
              </Link>
              <Link to={"/auction/스포츠,레저"}>
                <p>스포츠,레저</p>
              </Link>
              <Link to={"/auction/의류"}>
                <p>의류</p>
              </Link>
              <Link to={"/auction/기타잡화"}>
                <p className="menu_mini">기타잡화</p>
              </Link>
            </div>
          </div>
          <div
            className="menu_list"
            onMouseOver={() => setView(1)}
            onMouseOut={() => setView("")}
          >
            <h1 className={`menu_item ${view === 1 ? "view" : ""}`}>
              경매등록
            </h1>
            <div className={`regist ${view === 1 ? "view" : ""}`}>
              <p>중고물품등록</p>
            </div>
          </div>
          <div
            className="menu_list"
            onMouseOver={() => setView(2)}
            onMouseOut={() => setView("")}
          >
            <h1 className={`menu_item ${view === 2 ? "view" : ""}`}>
              고객센터
            </h1>
            <div className={`service ${view === 2 ? "view" : ""}`}>
              <p>공지사항</p>
              <p className="menu_mini">이벤트</p>
            </div>
          </div>
          <div
            className="menu_list"
            onMouseOver={() => setView(3)}
            onMouseOut={() => setView("")}
          >
            <h1 className={`menu_item ${view === 3 ? "view" : ""}`}>
              <p>마이페이지</p>
            </h1>
            <div className={`user ${view === 3 ? "view" : ""}`}>
              <p>포인트내역</p>
              <p>등록물품내역</p>
              <p className="menu_mini">입찰내역</p>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Header;
