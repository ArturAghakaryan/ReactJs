import React from "react"

import "./Layout.scss"

const Layout = ({children}) => {
    return(
        <div className="content-inner">
            <div className="content-main">
                {children}
            </div>
        </div>
    )
}
  
export default Layout;
  