import React from "react"

import "./Layout.scss"

const Layout = ({children}) => {
    return(
        <div className="content-inner">
            {children}
        </div>
    )
}
  
export default Layout;
  