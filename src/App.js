import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";

import Container from "./Container";

function App() {
  return (
    <div className="App">
      <Header />

      <Home />
      <Container />

      <Footer />
    </div>
  );
}

export default App;
