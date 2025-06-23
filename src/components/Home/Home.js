// src/components/Home/Home.js
import React from 'react';
import './Home.css';
import Carousel from './Carousel/Carousel'; 
import ShowcaseSection from './ShowcaseSection/ShowcaseSection';
import Getstarted from './Getstarted/Getstarted';
import WhatWeDo from './WhatWeDo/WhatWeDo';
import ContactUs from './ContactUs/ContactUs';

function Home() {
  return (
     <>
      <header className="f-heading f-heading--hero" id="home">
      <div className="a-container f-heading__container f-hero__container">
        <div className="f-heading__headline f-hero__headline">
          <h1 className="f-hero__title">
            <small className="a-sr-only f-color--accent">
              Empowering Businesses with 
            </small>
            <span className="f-text--gradient f-text--shadow">
              Cutting-Edge Digital Solutions
            </span>
          </h1>
          <p className="f-hero__subtitle">
            At Devitx, we craft custom software, web, mobile, and blockchain solutions that drive innovation, boost engagement, and deliver measurable results.
          </p>

          <div className="a-buttons a-gap--m a-gap-row--s f-hero__buttons">
            <a
              className="a-button a-button--xxl f-aurora f-button f-button--emboss f-button--main f-hero__button"
              href="#contact"
            >
              <span className="f-aurora__content">Become a Stakeholder</span>
              <span aria-hidden="true" className="f-aurora__background"></span>
            </a>
          </div>
        </div>

        {/* Additional Bricks / Buttons */}
        <div className="f-hero__bricks">
          {/* Example brick */}
          <a
            className="a-button f-aurora f-aurora--hidden f-border f-brick f-brick--active f-button f-button--brick f-depth f-depth--up"
            href="#services"
          >
            <span className="f-aurora__content">WebApp</span>
            <span aria-hidden="true" className="f-aurora__background"></span>
          </a>
           <a
            className="a-button f-aurora f-aurora--hidden f-border f-brick f-brick--active f-button f-button--brick f-depth f-depth--up"
            href="#services"
          >
            <span className="f-aurora__content">App/iOS</span>
            <span aria-hidden="true" className="f-aurora__background"></span>
          </a>
           <a
            className="a-button f-aurora f-aurora--hidden f-border f-brick f-brick--active f-button f-button--brick f-depth f-depth--up"
            href="#services"
          >
            <span className="f-aurora__content">Blockchain</span>
            <span aria-hidden="true" className="f-aurora__background"></span>
          </a>
           <a
            className="a-button f-aurora f-aurora--hidden f-border f-brick f-brick--active f-button f-button--brick f-depth f-depth--up"
            href="#services"
          >
            <span className="f-aurora__content">UI/UX</span>
            <span aria-hidden="true" className="f-aurora__background"></span>
          </a>

          {/* Add more buttons/links here just like above */}
        </div>

        {/* Glass/Animation effect elements */}
        <figure aria-hidden="true" className="f-hero__window f-window">
          {Array.from({ length: 14 }, (_, i) => (
            <span key={i} className={`f-glass f-glass--${i + 1}`}></span>
          ))}
        </figure>
      </div>
    </header>

    <Carousel />
    <ShowcaseSection />
    <Getstarted />
    <WhatWeDo />
    <ContactUs />
   </>
  );
}

export default Home;
