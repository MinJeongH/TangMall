import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthProvider";

function Login() {
  const [InputId, setInputId] = useState("");
  const [InputPw, setInputPw] = useState("");

  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();

  const state = location.state;
  const from = state ? state.from.pathname : "/";

  const onClickLogin = (e) => {
    console.log("홈으로 가자...");
    e.preventDefault();
    auth.signin(InputId, () => {
      navigate(from, { replace: true });
    });
  };

  const handleInputId = (e) => {
    setInputId(e.target.value);
  };

  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label htmlFor="input_id">ID : </label>
        <input
          type="text"
          name="input_id"
          value={InputId}
          onChange={handleInputId}
        />
        <div>{InputId}</div>
      </div>
      <div>
        <label htmlFor="input_pw">PW : </label>
        <input
          type="password"
          name="input_pw"
          value={InputPw}
          onChange={handleInputPw}
        />
        <div>{InputPw}</div>
      </div>
      <div>
        <button type="button" onClick={onClickLogin}>
          Login
        </button>
      </div>
    </div>
  );
}

export default Login;
