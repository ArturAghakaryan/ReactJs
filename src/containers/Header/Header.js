import React from "react"

import "./Header.scss"

const Header = ( ) => {
    return(
        <header className="header-main">
            <div className="container">
                <div className="header-content">
                    <div className="logo-content">
                        <span>Logo</span>
                    </div>
                    <div className="header-nav">
                        <ul className="nav-item-list">
                            <li className="nav-item">
                                <button className="nav-item-btn">Sing in</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-item-btn">Sing up</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;