import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Work from "./components/Work";
import School from "./components/School";
import imageToAdd from "./images/bg2.jpg";
import Language from "./components/Language";

function App() {
  return (
    <>
      <Header />
      <Language />
      <img src={imageToAdd} className="bg-img" alt="bg"></img>
      <Home />
      <About />
      <School />
      <Work />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
