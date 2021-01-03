import "./App.scss";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutButton from "./components/Button/AboutButton";

function App() {
  return (
    <div className="App">
      <Header />
      <Map />
      <Footer />
      <AboutButton />
    </div>
  );
}

export default App;
