import { MouseEventHandler } from "react";
import {
  FaArrowRight,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
} from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { IoIosArrowDropup } from "react-icons/io";
import { MdLocationOn, MdMarkEmailUnread } from "react-icons/md";
import { RiTwitterXLine } from "react-icons/ri";
import "./Footer.css";

const Footer = () => {
  const toTheTop: MouseEventHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="footer">
      <div className="creator">
        <div className="info">
          <FaPhoneAlt className="icon" />
          <p> +254 720128694</p>
        </div>
        <div className="info">
          <MdMarkEmailUnread className="icon" />
          <p>njorodev1319@gmail.com</p>
        </div>
        <div className="info">
          <MdLocationOn className="icon" />
          <p>Nairobi - Kenya</p>
        </div>
      </div>
      <div className="the-company">
        <div className="desc">
          <h3>Company</h3>
          <p>Charlies Kitchen</p>
        </div>
        <div className="desc">
          <h3>About</h3>
          <p>
            We offer recipes freely available for food from all around the
            world.
          </p>
        </div>
        <div className="desc">
          <h3>Resources</h3>
          <p>
            All recipes acquired from well know chefs in hotels all around the
            world.
          </p>
        </div>
        <div className="subs">
          <label htmlFor="email">
            <input
              type="email"
              placeholder="Enter your email"
              id="email"
              autoComplete="none"
            />
            <FaArrowRight className="send" />
          </label>

          <p>Enter email here to subscribe</p>
        </div>
      </div>
      <div className="socials">
        <div className="media">
          <a href="">
            <FiGithub />
          </a>
        </div>
        <div className="media">
          <a href="">
            <FaLinkedinIn />
          </a>
        </div>
        <div className="media">
          <a href="">
            <RiTwitterXLine />
          </a>
        </div>
        <div className="media">
          <a href="">
            <FaInstagram />
          </a>
        </div>

        <IoIosArrowDropup className="top-roll" onClick={toTheTop} />
      </div>
      <div className="developer">
        <img src="images/njoro.jpg" alt="Charles Photo" />
        <p>Created by Charles.</p>
      </div>
    </div>
  );
};

export default Footer;
