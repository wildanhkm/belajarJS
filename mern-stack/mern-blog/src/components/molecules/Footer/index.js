import React from "react";
import { ReactLogo, ICEmail, ICGithub, ICLinkedin } from "../../../assets";
import "./footer.scss";

const Icon = ({ img }) => {
  return (
    <div className="icon-container">
      <img className="icon-socmed" src={img} alt="icon social media" />
    </div>
  );
};
const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <img className="logo" src={ReactLogo} alt="blog logo" />
        </div>
        <div className="social-container">
          <Icon img={ICEmail} />
          <Icon img={ICGithub} />
          <Icon img={ICLinkedin} />
        </div>
      </div>
      <div className="copyright">
        <p>Copyright</p>
      </div>
    </div>
  );
};

export default Footer;
