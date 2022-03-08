import { Checkbox } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import AgreePerText from "./AgreePerText";
import AgreeText from "./AgreeUseText";
import "./RegisterAgree.scss";

function RegisterAgree() {
  const navigate = useNavigate();
  const [TermsAll, setTermsAll] = useState(false);
  const [TermsUse, setTermsUse] = useState(false);
  const [TermsPer, setTermsPer] = useState(false);

  const termsAllHandler = (e) => {
    setTermsAll(e.target.checked);
    setTermsUse(e.target.checked);
    setTermsPer(e.target.checked);
  };
  const termsUseHandler = (e) => {
    setTermsUse(e.target.checked);
    if (e.target.checked && TermsPer) {
      setTermsAll(e.target.checked);
    } else {
      setTermsAll(false);
    }
  };
  const termsPerHandler = (e) => {
    setTermsPer(e.target.checked);
    if (TermsUse && e.target.checked) {
      setTermsAll(e.target.checked);
    } else {
      setTermsAll(false);
    }
  };

  const onClickAgree = () => {
    if (TermsAll) {
      navigate("/Register", { replace: true });
    } else {
      alert("약관에 모두 동의해 주세요");
    }
  };
  const onClickDisagree = () => {
    navigate("/", { replace: true });
  };

  return (
    <div className="agree-container">
      <div className="agree-head-box">
        <h1 className="sdfjsdk">이용약관 및 개인정보 수집 동의</h1>
      </div>
      <div className="agree-all-box">
        <Checkbox checked={TermsAll} onChange={termsAllHandler} />
        이용약관, 개인정보 수집 및 이용에 모두 동의합니다.
      </div>

      <div className="block"></div>
      <div className="agree-content-box">
        <div className="agree-content-checkbox">
          <Checkbox
            className="checkBox"
            checked={TermsUse}
            onChange={termsUseHandler}
          />
          &nbsp;이용약관
        </div>

        <div className="agree-content-terms">
          <AgreeText />
        </div>
      </div>

      <div className="block"></div>

      <div className="agree-content-box">
        <div
          className="agree-content-checkbox"
        >
          <Checkbox
            className="checkBox"
            checked={TermsPer}
            onChange={termsPerHandler}
          />
          &nbsp;개인정보 수집 및 이용
        </div>
        <div className="agree-content-terms">
          <AgreePerText />
        </div>
      </div>

      <div className="block"></div>
      <div className="agree-btn-box">
        <button
          className="next-btn agree"
          type="button"
          onClick={onClickAgree}
        >
          다 음
        </button>
        <button className="next-btn disagree" onClick={onClickDisagree}>
          돌아가기
        </button>
      </div>
    </div>
  );
}

export default RegisterAgree;
