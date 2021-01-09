import React from "react"

import "./Header.scss"

const Header = (props) => {
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
                                <button className="nav-item-btn" onClick={props.openLoginModal}>Sing in</button>
                            </li>
                            <li className="nav-item">
                                <button className="nav-item-btn" onClick={props.openRegistrModal}>Sing up</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;