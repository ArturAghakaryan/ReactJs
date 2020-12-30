import './App.scss';

import Header from "./containers/Layout/Header/Header";
import Footer from "./containers/Layout/Footer/Footer";
import List from "./containers/List/List";

function App() {
  return (
    <div className="App">
        <Header />
        <main className="content--main">
          <List />
        </main>
        <Footer />
    </div>
  );
}

export default App;
