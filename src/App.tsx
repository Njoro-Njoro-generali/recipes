import { useState } from "react";
import "./App.css";
import CoffeeList from "./components/CoffeeList";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import ItalianList from "./components/ItalianList";
import RiceList from "./components/RiceList";

function App() {
  const [homeClass, setHomeClass] = useState("home-page");
  const [coffeeClass, setCoffeeClass] = useState("coffee-hide");
  const [riceClass, setRiceClass] = useState("rice-hide");
  const [italyClass, setItalyClass] = useState("italian-hide");

  const goCoffee = () => {
    if (coffeeClass === "coffee-hide" && homeClass === "home-page") {
      setCoffeeClass("coffee-page");
      setHomeClass("home-hide");
    } else if (coffeeClass === "coffee-page" && homeClass === "home-hide") {
      setCoffeeClass("coffee-page");
      setHomeClass("home-hide");
    } else if (coffeeClass === "coffee-hide" && homeClass === "home-hide") {
      setCoffeeClass("coffee-page"); //then set all other pages to hide
      setRiceClass("rice-hide");
      setItalyClass("italian-hide");
      setHomeClass("home-hide");
    }
  };

  const goRice = () => {
    if (riceClass === "rice-hide" && homeClass === "home-page") {
      setRiceClass("rice-page");
      setHomeClass("home-hide");
    } else if (riceClass === "rice-page") {
      setRiceClass("rice-page");
    } else if (riceClass === "rice-hide" && homeClass === "home-hide") {
      setRiceClass("rice-page"); // all other pages to hide
      setCoffeeClass("coffee-hide");
      setHomeClass("home-hide");
      setItalyClass("italian-hide");
    }
  };

  const goItaly = () => {
    if (italyClass === "italian-hide" && homeClass === "home-page") {
      setItalyClass("italian-page");
      setHomeClass("home-hide");
    } else if (italyClass === "italian-page") {
      setItalyClass("italian-page");
    } else if (italyClass === "italian-hide" && homeClass === "home-hide") {
      setItalyClass("italian-page"); // all others to hide
      setCoffeeClass("coffee-hide");
      setRiceClass("rice-hide");
      setHomeClass("home-hide");
    }
  };

  const homeDirect = () => {
    setHomeClass("home-page"); //then all pages to hide
    setCoffeeClass("coffee-hide");
    setRiceClass("rice-hide");
    setItalyClass("italian-hide");
  };

  return (
    <>
      <div className="mainer">
        <div className={homeClass} id="page">
          <Home
            goingToItaly={goItaly}
            goingToCoffee={goCoffee}
            goingToRice={goRice}
          />
          <Footer />
        </div>

        <div className={coffeeClass} id="page">
          <Header
            coffeeAndBack={goCoffee}
            backToHome={homeDirect}
            riceAndBack={goRice}
            italyAndBack={goItaly}
            name="Coffee Kitchen"
          />
          <CoffeeList />
          <Footer />
        </div>
        <div className={riceClass} id="page">
          <Header
            coffeeAndBack={goCoffee}
            backToHome={homeDirect}
            riceAndBack={goRice}
            italyAndBack={goItaly}
            name="Rice Kitchen"
          />
          <RiceList />
          <Footer />
        </div>
        <div className={italyClass} id="page">
          <Header
            coffeeAndBack={goCoffee}
            backToHome={homeDirect}
            riceAndBack={goRice}
            italyAndBack={goItaly}
            name="Italian Kitchen"
          />
          <ItalianList />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
