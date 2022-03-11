import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../common/auth/AuthProvider";
import "./Login.scss";

function Login() {
  const [InputId, setInputId] = useState("");
  const [InputPw, setInputPw] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const state = location.state;
  const from = state ? state.from.pathname : "/";

  const onClickLogin = (e) => {
    e.preventDefault();

    let request = {
      userId: InputId,
      userPw: InputPw,
    };

    auth
      .signin(request)
      .then((res) => {
        if (res) {
          navigate(from, { replace: true });
        } else {
          alert("로그인에 실패 했습니다.");
        }
      })
      .catch((err) => {
        alert(err);
      });
  };

  const onClickRegister = () => {
    navigate("/registerAgree", { replace: true });
  };

  const onClickRegisterCancel = () => {
    navigate(-1);
  };

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  return (
    <div className="login-container">
      <div className="login-container-title">방문을 &nbsp; 환영합니다</div>
      <div className="login">
        <div className="login-id-box">
          <input
            className="login-input"
            type="text"
            name="input_id"
            placeholder="아이디"
            value={InputId}
            onChange={handleInputId}
          />
        </div>
        <div className="login-pw-box">
          <input
            className="login-input"
            type="password"
            name="input_pw"
            placeholder="비밀번호"
            value={InputPw}
            onChange={handleInputPw}
          />
        </div>
        <div className="login-btn-box">
          <button className="login-btn" type="button" onClick={onClickLogin}>
            로 그 인
          </button>
        </div>
      </div>
      <div className="join-find">
        <button
          type="button"
          className="join-find-button"
          onClick={onClickRegister}
        >
          회원가입
        </button>
      </div>
    </div>
  );
}

export default Login;
