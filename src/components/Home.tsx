import { MouseEventHandler } from "react";
import { FaKitchenSet } from "react-icons/fa6";
import "./Home.css";

interface HomeProps {
  goingToCoffee: MouseEventHandler;
  goingToRice: MouseEventHandler;
  goingToItaly: MouseEventHandler;
}

const Home: React.FC<HomeProps> = ({
  goingToCoffee,
  goingToRice,
  goingToItaly,
}) => {
  return (
    <div className="home-page">
      <div className="logo">
        <FaKitchenSet className="icon" />
      </div>
      <div className="name">
        <h1>CHARLIE'S KITCHEN </h1>
        <p>YOUR ONE STOP ONLINE RECIPE COLLECTION</p>
      </div>
      <div className="menu">
        <button className="link coffee" onClick={goingToCoffee}>
          COFFEE
        </button>

        <button className="link rice" onClick={goingToRice}>
          RICE
        </button>

        <button className="link africans" onClick={goingToItaly}>
          ITALIAN
        </button>

        <button className="link others">OTHERS</button>
      </div>
    </div>
  );
};

export default Home;
