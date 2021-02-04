import React from "react";

import "./Layout.scss";

const Layout = ({ children }) => {
  return (
    <div className="content-main">
      <div className="content-inner">{children}</div>
    </div>
  );
};

export default Layout;
