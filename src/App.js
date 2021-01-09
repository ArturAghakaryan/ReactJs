import './App.scss';

import Layout from "./components/Layout/Layout"
import Header from "./containers/Header/Header"
import Footer from "./containers/Footer/Footer"

function App() {
  return (
    <div className="App">
        <Header />
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
        </Layout>
        <Footer />
    </div>
  );
}

export default App;

