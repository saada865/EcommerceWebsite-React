import React from "react";
import "./Footer.css";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";

const Footer = () => {
  return (
    <footer id="footer">
      <div class="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstre" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div class="midFooter">
        <h1>Ecomm.com</h1>
        <p>High quality is our first priority</p>
        <p>Copyrights 2021 &copy; MeSaadMalik</p>
      </div>

      <div class="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com/meabhisingh">Instagram</a>
        <a href="http://youtube.com/6packprogrammer">Youtube</a>
        <a href="http://instagram.com/meabhisingh">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
