import React from "react";

import Login from "./Login/Login";
import Register from "./Register/Register";

import "./Authentication.scss";

const Authentication = ({isOpenLogin , isOpenRegistr ,openLoginModal ,openRegistrModal}) => {
  
  return (
    <div className="authentication-modals">
      {isOpenLogin && (
        <div className="login-modal">
          <Login
            openLoginModal={openLoginModal}
            openRegistrModal={openRegistrModal}
          />
        </div>
      )}
      {isOpenRegistr && (
        <div className="registr-modal">
          <Register
            openLoginModal={openLoginModal}
            openRegistrModal={openRegistrModal}
          />
        </div>
      )}
    </div>
  );
};

export default Authentication;
