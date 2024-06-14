import { MouseEventHandler, useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import "./Header.css";

interface HeaderProps {
  coffeeAndBack: MouseEventHandler;
  backToHome: MouseEventHandler;
  riceAndBack: MouseEventHandler;
  italyAndBack: MouseEventHandler;
  name: string;
}

const Header: React.FC<HeaderProps> = ({
  coffeeAndBack,
  backToHome,
  riceAndBack,
  italyAndBack,
  name,
}) => {
  const [dropMenu, setDropMenu] = useState("drop-hide");

  const dropping = () => {
    if (dropMenu === "drop-hide") {
      setDropMenu("drop-menu");
    } else {
      setDropMenu("drop-hide");
    }
  };

  return (
    <div className="header">
      <div className="creator">
        <img src="images/newlogo.jpeg" alt="my logo" />
        <h1>
          {"  "} {name}
        </h1>
      </div>
      <div className="logo"></div>
      <div className="menu">
        <div className="link">
          <p onClick={backToHome}>Home</p>
        </div>
        <div className="link">
          <p onClick={coffeeAndBack}>Coffee</p>
        </div>
        <div className="link" onClick={riceAndBack}>
          <p>Rice</p>
        </div>
        <div className="link" onClick={italyAndBack}>
          <p>Italian</p>
        </div>
        <div className="link">
          <p>Others</p>
        </div>
      </div>
      <div className={dropMenu}>
        <div className="link">
          <p onClick={backToHome}>Home</p>
        </div>
        <div className="link">
          <p onClick={coffeeAndBack}>Coffee</p>
        </div>
        <div className="link" onClick={riceAndBack}>
          <p>Rice</p>
        </div>
        <div className="link" onClick={italyAndBack}>
          <p>Italian</p>
        </div>
        <div className="link">
          <p>Others</p>
        </div>
      </div>
      <GiHamburgerMenu className="call-drop" onClick={dropping} />
    </div>
  );
};

export default Header;
