import React, { useEffect, useState } from "react";
import msgImg from "../assets/undraw_mail_sent_re_0ofv.svg";
import { Link } from "react-router-dom";
function ConfirmMail() {
  const [disable, setDisable] = useState(true);
  useEffect(() => {
    const time = setTimeout(() => {
      setDisable(false);
    }, 30000);
    return () => {
      clearTimeout(time);
    };
  }, []);

  return (
    <div className="confirm-mail flex-style">
      <div>
        <img src={msgImg} alt="msgImg" />
        <h1>Your registration is complete</h1>
        <h2>Please check your email to confirm registration</h2>
        <button className={disable ? "btn disable" : "btn"}>
          Resend Email
        </button>
        <br />
        <Link className="other-links" to="/home">
          Go To Homepage
        </Link>
      </div>
    </div>
  );
}

export default ConfirmMail;
