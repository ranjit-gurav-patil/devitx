// src/components/Header.js
import React, { useEffect, useState } from 'react';
import deviteslogo from '../assets/deviteslogo.png';
import './Header.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`f-header f-header--sticky ${scrolled ? 'scrolled' : ''}`}>
      <div className="a-container--full f-header__container">
        <div className="a-flex a-flex--align-center a-gap--s:m a-gap--xs:s a-gap--xxs:xs a-gap--xxxs">
          <div className="a-flex__item f-header__logo">
            <p className="f-logo">
              <a aria-label="Go to Homepage" href="" rel="home">
                <img
                  alt="Devites.Agency — Web Design & Development Agency"
                  className="f-logo__img"
                  decoding="async"
                  fetchPriority="high"
                  height="32"
                  src={deviteslogo}
                  width="168"
                />
              </a>
            </p>
          </div>
          <div className="a-flex__item--auto f-header__partnership">
            <a
              className="a-badge f-badge f-badge--available f-badge--xs f-partnership f-status"
              href="#contact"
              title="We are available for new projects."
            >
              <span>Currently available</span>
            </a>
          </div>
          <div className="a-flex__item--auto:m a-flex__item:min f-header__navigation js-off__container">
            <div className="a-off f-navigation--off f-navigation__container f-off js-off" data-off="navigation" data-off-breakpoint="1024" data-off-position="right" data-off-transition="250" id="navigation">
              <button
                aria-controls="navigation"
                className="a-button a-button--icon a-off__close f-button f-button--puff f-navigation__close f-off__close js-off__close"
                data-off="navigation"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                  className="icon"
                  fill="none"
                  focusable="false"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path d="M6 6L18 18" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                  <path d="M6 18L18 6" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
                </svg>
                <span className="a-sr-only">Close</span>
              </button>
              <nav aria-label="Navigation" className="f-navigation f-navigation--primary" itemScope="" itemtype="https://schema.org/SiteNavigationElement">
                <ul className="f-navigation__list f-navigation__list--mobile f-navigation__list--primary" id="menu-navigation">
                  <li className="current-menu-item current_page_item menu-item menu-item-12 menu-item-home menu-item-object-page menu-item-type-post_type page-item-5 page_item" id="menu-item-12">
                    <a aria-current="page" href="#home">Home</a>
                  </li>
                  <li className="menu-item menu-item-96 menu-item-object-page menu-item-type-post_type" id="menu-item-96">
                    <a href="#what-we-do">What We Do</a>
                  </li>
                  <li className="menu-item menu-item-96 menu-item-object-page menu-item-type-post_type" id="menu-item-96">
                    <a href="#services">Services</a>
                  </li>
                  <li className="menu-item menu-item-96 menu-item-object-page menu-item-type-post_type" id="menu-item-96">
                    <a href="#process">Process</a>
                  </li>
                  <li className="menu-item menu-item-94 menu-item-object-page menu-item-type-post_type" id="menu-item-94">
                    <a href="#contact">Contact</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          
        </div>
      </div>
    </header>
  );
}

export default Header;
