import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";
import "./Register.scss";

function Register() {
  const [UserId, setUserId] = useState("");
  const [UserPw, setUserPw] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");
  const [NickName, setNickName] = useState("");
  const [Email, setEmail] = useState("");
  const [PhoneNum, setPhoneNum] = useState();

  const auth = useAuth();
  const navigate = useNavigate();

  const onUserIdHandler = (e) => {
    setUserId(e.currentTarget.value);
  };
  const onUserPwHandler = (e) => {
    setUserPw(e.currentTarget.value);
  };
  const onConfirmPasswordHandler = (e) => {
    setConfirmPassword(e.currentTarget.value);
  };
  const onNickNameHandler = (e) => {
    setNickName(e.currentTarget.value);
  };
  const onEmailHandler = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onPhoneNumHandler = (e) => {
    setPhoneNum(e.currentTarget.value);
  };

  const onClickIdCheck = (TestUserId) => {
    var TestUserId = false;
    if (TestUserId) {
      alert("아이디가 이미 사용중 입니다.");
    } else {
      alert("사용 가능한 아이디 입니다.");
    }
  };

  const onClickNickCheck = (TestNickName) => {
    var TestNickName = false;
    if (TestNickName) {
      alert("닉네임이 이미 사용중 입니다.");
    } else {
      alert("사용 가능한 닉네임 입니다.");
    }
  };

  const onCancel = (e) => {
    navigate("/", { replace: true });
  };

  const onRegister = (e) => {
    var emailtest = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;

    if (!UserId || UserId.length < 4) {
      return alert("아이디 4글자 이상 입력해 주세요");
    }
    if (!UserPw || UserPw.length < 6) {
      return alert("비밀번호를 입력해 주세요.");
    }
    if (UserPw !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호확인은 같아야 합니다.");
    }
    if (NickName.length < 2) {
      return alert("닉네임을 2글자 이상 입력해 주세요.");
    }
    if (!emailtest.test(Email)) {
      return alert("이메일을 형식에 맞게 입력해주세요");
    }
    if (PhoneNum.length < 10) {
      return alert("비밀번호와 비밀번호확인은 같아야 합니다.");
    }

    let request = {
      userId: UserId,
      userPw: UserPw,
      NickName: NickName,
      Email: Email,
      PhoneNum: PhoneNum,
    };

    auth.register(request).then((res) => {
      if (res) {
        navigate("/login", { replace: true });
      } else {
        alert("회원가입에 실패하였습니다.");
      }
    });
  };

  return (
    <div className="register-container">
      <div className="register-head">
        <h1>회원가입</h1>
        <hr className="register-high-hr" />
      </div>
      <div className="id-box">
        <div className="title">아이디</div>
        <div className="title-content">
          <input
            className="input-btn"
            type="text"
            placeholder="영문 소문자 숫자 조합"
            value={UserId}
            onChange={onUserIdHandler}
          />
          <button className="btn-check" onClick={onClickIdCheck}>
            중복확인
          </button>
        </div>
      </div>
      <div className="pw-box">
        <div className="title">비밀번호</div>
        <div className="title-content">
          <input
            className="input-nobtn"
            type="password"
            placeholder="영문, 숫자 조합"
            value={UserPw}
            onChange={onUserPwHandler}
          />
        </div>
      </div>
      <div className="conpw-bow">
        <div className="title">비밀번호확인</div>
        <div className="title-content">
          <input
            className="input-nobtn"
            type="password"
            placeholder="영문, 숫자 조합"
            value={ConfirmPassword}
            onChange={onConfirmPasswordHandler}
          />
        </div>
      </div>
      <div className="nick-box">
        <div className="title">닉네임</div>
        <div className="title-content">
          <input
            className="input-btn"
            type="text"
            value={NickName}
            onChange={onNickNameHandler}
          />
          <button className="btn-check" onClick={onClickNickCheck}>
            중복확인
          </button>
        </div>
      </div>
      <div className="email-box">
        <div className="title">이메일</div>
        <div className="title-content">
          <input
            className="input-nobtn"
            type="text"
            name="email"
            placeholder="sample@gmail.com"
            value={Email}
            onChange={onEmailHandler}
          />
        </div>
      </div>
      <div className="phone-box">
        <div className="title">휴대폰번호</div>
        <div className="title-content">
          <input
            className="input-nobtn"
            type="number"
            placeholder="숫자만 입력 가능"
            value={PhoneNum}
            onChange={onPhoneNumHandler}
          />
        </div>
      </div>
      <div style={{ padding: "2rem 10rem" }}>
        <hr />
      </div>
      <div className="btn-next-box">
        <button className="btn-next per-register" onClick={onRegister}>
          회원가입
        </button>
        <button className="btn-next cancel" onClick={onCancel}>
          취소
        </button>
      </div>
    </div>
  );
}

export default Register;
