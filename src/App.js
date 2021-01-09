import React,  { useState } from 'react'

import './App.scss';

import Layout from "./components/Layout/Layout"
import Header from "./containers/Header/Header"
import Footer from "./containers/Footer/Footer"
import Authentication from "./containers/Authentication/Authentication"

function App() {

  const [isOpenLogin , openLogin] = useState(false)
  const [isOpenRegistr , openRegistr] = useState(false)

  const openLoginModal = () => {
      if(isOpenRegistr === true){
        openRegistr(false);
      }
      
      openLogin(!isOpenLogin ? true : false);
  }

  const openRegistrModal = () => {
      if(isOpenLogin === true){
        openLogin(false);
      }

      openRegistr(isOpenRegistr ? false : true);
  }

  return (
    <div className="App">
        <Header openLoginModal={openLoginModal} openRegistrModal={openRegistrModal}/>
        <Layout>
          <div className="content-main">
            <section className="welcome-content">
              <div className="welcome-bg"></div>
              <div className="welcome-info">
                <div className="welcome-info-content">
                  <h2>Welcome !</h2>
                  <p>my first React project</p>
                </div>
              </div>
            </section>
          </div>
          <Authentication isOpenLogin={isOpenLogin} isOpenRegistr={isOpenRegistr}/>
        </Layout>
        <Footer />
    </div>
  );
}

export default App;

