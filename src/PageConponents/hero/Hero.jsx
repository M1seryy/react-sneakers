import React from "react";
import "./hero.scss";
import logoText from "../../images/img/text.png";
import logoSlider from "../../images/img/logo-slider.png";
import Button from "../button/Button";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero_section">
          <div className="hero__slider">
            <div className="text__side">
              <img src={logoSlider} alt="logo" />
              <img className="logo-text" src={logoText} alt="text" />
              <Button title="Order"/>
            </div>
            <div className="bg__side"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
