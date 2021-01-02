import "./App.scss";
import Map from "./components/Map";
import "rc-footer/assets/index.css"; // import 'rc-footer/asssets/index.less';
import Footer from "./components/Footer";
import Header from "./components/Header";
import AboutButton from "./components/AboutButton";

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
