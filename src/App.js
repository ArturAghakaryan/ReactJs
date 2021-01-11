import React,  { useState } from 'react'

import Layout from "./components/Layout/Layout"
import Header from "./containers/Header/Header"
import Footer from "./containers/Footer/Footer"
import Authentication from "./containers/Authentication/Authentication"

import './App.scss';

function App() {

  const [isOpenLogin , openLogin] = useState(false)
  const [isOpenRegistr , openRegistr] = useState(false)

  const openLoginModal = () => {
      if(isOpenRegistr === true){
        openRegistr(false);
      }

      if(!isOpenLogin){
        document.body.classList.add('no-scroll')
      }else{
        document.body.classList.remove('no-scroll')
      }

      openLogin(!isOpenLogin ? true : false);
  }

  const openRegistrModal = () => {
      if(isOpenLogin === true){
        openLogin(false);
      }

      if(!isOpenRegistr){
        document.body.classList.add('no-scroll')
      }else{
        document.body.classList.remove('no-scroll')
      }

      openRegistr(!isOpenRegistr ? true : false);
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
          <Authentication openLoginModal={openLoginModal}  isOpenLogin={isOpenLogin} openRegistrModal={openRegistrModal} isOpenRegistr={isOpenRegistr}/>
        </Layout>
        <Footer />
    </div>
  );
}

export default App;

