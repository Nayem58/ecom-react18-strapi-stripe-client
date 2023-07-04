import React from "react";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";

import "./Footer.scss";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="col">
          <div className="title">About</div>
          <div className="text">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel
            corrupti aliquid, libero excepturi odit aliquam repellat debitis in
            quo veniam similique. Rerum expedita dolores commodi explicabo ut
            velit beatae vero?
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaLocationArrow />
            <div className="text">
              House 11, Rd #00,
              <br />
              City, ST, 00000
            </div>
          </div>
        </div>
        <div className="col">
          <div className="title">Contact</div>
          <div className="c-item">
            <FaMobileAlt />
            <div className="text">Phone: 000-000-0000</div>
          </div>
          <div className="c-item">
            <FaEnvelope />
            <div className="text">Email: nayem.csm@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="title">Categories</div>
          <div className="text">Cat 1</div>
          <div className="text">Cat 2</div>
          <div className="text">Cat 3</div>
          <div className="text">Cat 4</div>
          <div className="text">Cat 5</div>
          <div className="text">Cat 6</div>
        </div>
        <div className="col">
          <div className="title">Page</div>
          <div className="text">Page 1</div>
          <div className="text">Page 2</div>
          <div className="text">Page 3</div>
          <div className="text">Page 4</div>
          <div className="text">Page 5</div>
          <div className="text">Page 6</div>
        </div>
      </div>
      <div className="bottom-bar">
        <div className="bottom-bar-content">
          <div className="text">Created By Nayem58</div>
          <img src={Payment} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
