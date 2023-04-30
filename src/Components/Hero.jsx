import React from "react";
import "./Hero.css";
import {Link, Route, Routes} from 'react-router-dom';
const Hero = () => {
 
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__content">
          <h1 className="heading-primary">HEY, I'AM AFTAB AHMED</h1>
          <div className="home-hero__info">
            <p className="text-primary">
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>
          <button >
            <span>MY PEOJECTS</span>
          </button>
        </div>

        <div className="home-hero__mouse-scroll-cont">
          <div className="mouse" />
        </div>
      </section>
    </>
  );
};

export default Hero;
