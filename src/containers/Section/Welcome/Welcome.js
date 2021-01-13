import React from "react"

import "./Welcome.scss"

const Welcome = ({children}) => {
    return(
        <section className="welcome-content">
              <div className="welcome-bg"></div>
              <div className="welcome-info">
                <div className="welcome-info-content">
                  <h2>Welcome !</h2>
                  <p>my first React project</p>
                </div>
              </div>
        </section>
    )
}
  
export default Welcome;