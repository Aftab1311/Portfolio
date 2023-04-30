import React from 'react'
import './Navbar.css'
import profile from '../img/logo/aftab.png'
const Navbar = () => {
  return (
    <>
        
      <div className="header__content">
        <div className="header__logo-container">
          <div className="header__logo-img-cont">
            <img src={profile} alt="Logo" className="header__logo-img" />
          </div>
          <span className="header__logo-sub">AFTAB AHMED</span>
        </div>
        <div className="header__main">
          <ul className="header__links">
            <li className="header__link-wrapper">
              <a href="./" className="header__link"> Home </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#about" className="header__link">About </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#projects" className="header__link"> Projects </a>
            </li>
            <li className="header__link-wrapper">
              <a href="./#contact" className="header__link"> Contact </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar