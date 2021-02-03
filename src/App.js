import React, { useState } from "react";

import Layout from "./components/Layout/Layout";
import Footer from "./containers/Footer/Footer";

import "./style/all.scss";

function App() {
  return (
    <div className="App">
      <Layout></Layout>
      <Footer />
    </div>
  );
}

export default App;
