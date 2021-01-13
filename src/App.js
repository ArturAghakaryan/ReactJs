import React, { useState } from "react";

import Layout from "./components/Layout/Layout";
import Header from "./containers/Header/Header";
import Footer from "./containers/Footer/Footer";
import Authentication from "./containers/Authentication/Authentication";
import Home from "./containers/Home/Home";
import Listing from "./containers/Listing/Listing";

import "./App.scss";

function App() {
  const [isOpenLogin, openLogin] = useState(false);
  const [isOpenRegistr, openRegistr] = useState(false);
  const [isOpenListing, openListing] = useState(false);

  const openLoginModal = () => {
    if (isOpenRegistr === true) {
      openRegistr(false);
    }

    if (!isOpenLogin) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    openLogin(!isOpenLogin ? true : false);
  };

  const openRegistrModal = () => {
    if (isOpenLogin === true) {
      openLogin(false);
    }

    if (!isOpenRegistr) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    openRegistr(!isOpenRegistr ? true : false);
  };

  const openListingPage = () => {

    if (!isOpenListing) {
      document.body.classList.add("is-ctl-listing");
    } else {
      document.body.classList.remove("is-ctl-listing");
    }

    openListing(!isOpenListing ? true : false);

  };

  return (
    <div className="App">
      <Header
        openLoginModal={openLoginModal}
        openRegistrModal={openRegistrModal}
        openListingPage={openListingPage}
      />
      <Layout>
        {!isOpenListing ? <Home /> : <Listing />}
        <Authentication
          openLoginModal={openLoginModal}
          isOpenLogin={isOpenLogin}
          openRegistrModal={openRegistrModal}
          isOpenRegistr={isOpenRegistr}
        />
      </Layout>
      <Footer />
    </div>
  );
}

export default App;
