import "./App.scss";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutButton from "./components/Button/AboutButton";
import ReactGA from "react-ga";

function App() {
  ReactGA.initialize(process.env.REACT_APP_GOOGLE_TRACK_ID);
  ReactGA.pageview("/");

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
