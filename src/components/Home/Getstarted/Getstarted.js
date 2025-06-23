import React from "react";
import "./Getstarted.css";

const marqueeItems = [
  "Web Design",
  "Analysis & Research",
  "UX Audits",
  "UX Wireframes",
  "UI Prototypes",
  "Websites",
  "Design Systems",
  "Landing Pages",
  "Product Pages",
  "Dashboards",
  "Apps",
  "Brand Identities",
  "Newsletters",
  "Banners",
  "Icons",
];
const Getstarted = () => {
  return (
    <section className="f-section f-section--services" id="services">
      <div className="a-container--full f-section__container">
        <header className="a-gap--s a-stack f-section__header f-section__header--center">
          <small className="f-badge f-badge--accent">Services</small>
          <h2>
            What can we <br /> help you with?
          </h2>
          <p>
            From Idea to Launch – And Beyond
At Devitx, we turn your bold ideas into powerful digital experiences. Whether you're starting from scratch or upgrading an existing product, we handle it all — from strategic planning and sleek design to robust development and post-launch support.
          </p>
        </header>
<div className="a-gap--m:m a-gap--s a-grid f-listings f-listings--plans f-listings--plans-sprints">
  <article className="f-border f-listing f-listing--active f-plan f-plan--web-design-and-development f-scroll--toY0 hentry plan post-910 status-publish type-plan" style={{ "--i": 1 }}>
  <div className="a-gap--xxs a-stack f-listing__container f-plan__container">
    <header className="a-gap--xs a-stack a-stack--align-center f-listing__header f-plan__header">
      <h3 className="f-color--web-design-and-development"><small>Web Development</small> <strong>Launch</strong></h3>
      <p className="f-plan__description">Custom websites built to engage users and grow your brand.</p>
    </header>
    <ul className="f-plan__features">
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Responsive UI Design</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">SEO-Ready Structure</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Frontend + Backend Development</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Performance Optimization</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">CMS or Custom Stack Options</li>
    </ul>
  </div>
</article>

<article className="f-border f-listing f-listing--active f-plan f-plan--app-development f-scroll--toY0 hentry plan post-911 status-publish type-plan" style={{ "--i": 2 }}>
  <div className="a-gap--xxs a-stack f-listing__container f-plan__container">
    <header className="a-gap--xs a-stack a-stack--align-center f-listing__header f-plan__header">
      <h3 className="f-color--app-development"><small>Mobile App</small> <strong>Experience</strong></h3>
      <p className="f-plan__description">iOS & Android apps built for speed, scale, and UX excellence.</p>
    </header>
    <ul className="f-plan__features">
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Cross-platform or Native Apps</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Custom UI/UX Design</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Secure Authentication</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">API Integration & Backend</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">App Store Deployment</li>
    </ul>
  </div>
</article>

<article className="f-border f-listing f-listing--active f-plan f-plan--blockchain-development f-scroll--toY0 hentry plan post-912 status-publish type-plan" style={{ "--i": 3 }}>
  <div className="a-gap--xxs a-stack f-listing__container f-plan__container">
    <header className="a-gap--xs a-stack a-stack--align-center f-listing__header f-plan__header">
      <h3 className="f-color--blockchain-development"><small>Blockchain</small> <strong>NextGen</strong></h3>
      <p className="f-plan__description">We build smart, secure, and scalable Web3 solutions.</p>
    </header>
    <ul className="f-plan__features">
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Smart Contract Development</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">NFT & Token Launch</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Wallet & dApp Integration</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Audited & Secure Code</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Ethereum, Solana, Polygon Support</li>
    </ul>
  </div>
</article>

<article className="f-border f-listing f-listing--active f-plan f-plan--data-ai f-scroll--toY0 hentry plan post-913 status-publish type-plan" style={{ "--i": 4 }}>
  <div className="a-gap--xxs a-stack f-listing__container f-plan__container">
    <header className="a-gap--xs a-stack a-stack--align-center f-listing__header f-plan__header">
      <h3 className="f-color--data-ai"><small>AI & Data Science</small> <strong>Insight</strong></h3>
      <p className="f-plan__description">Unlock smarter decisions through intelligent automation.</p>
    </header>
    <ul className="f-plan__features">
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Machine Learning Models</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Recommendation Systems</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Real-Time Analytics Dashboards</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Chatbots & AI Assistants</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Cloud-Based Data Pipelines</li>
    </ul>
  </div>
</article>
<article className="f-border f-listing f-listing--active f-plan f-plan--ui-ux-design f-scroll--toY0 hentry plan post-914 status-publish type-plan" style={{ "--i": 5 }}>
  <div className="a-gap--xxs a-stack f-listing__container f-plan__container">
    <header className="a-gap--xs a-stack a-stack--align-center f-listing__header f-plan__header">
      <h3 className="f-color--ui-ux-design"><small>UI/UX Design</small> <strong>Craft</strong></h3>
      <p className="f-plan__description">Designs that not only look stunning but feel intuitive.</p>
    </header>
    <ul className="f-plan__features">
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Custom Wireframes & Prototypes</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">User Flow Mapping</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Interactive Figma Mockups</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Conversion-Focused Layouts</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Design Handoff with Style Guide</li>
    </ul>
  </div>
</article>
<article className="f-border f-listing f-listing--active f-plan f-plan--support-maintenance f-scroll--toY0 hentry plan post-915 status-publish type-plan" style={{ "--i": 6 }}>
  <div className="a-gap--xxs a-stack f-listing__container f-plan__container">
    <header className="a-gap--xs a-stack a-stack--align-center f-listing__header f-plan__header">
      <h3 className="f-color--support-maintenance"><small>Support & Maintenance</small> <strong>Care</strong></h3>
      <p className="f-plan__description">We keep your site secure, fast, and running like clockwork.</p>
    </header>
    <ul className="f-plan__features">
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Performance Monitoring</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Bug Fixes & Security Patches</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Content Updates</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Monthly Health Reports</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Priority Support Access</li>
    </ul>
  </div>
</article>
<article className="f-border f-listing f-listing--active f-plan f-plan--cloud-devops f-scroll--toY0 hentry plan post-916 status-publish type-plan" style={{ "--i": 7 }}>
  <div className="a-gap--xxs a-stack f-listing__container f-plan__container">
    <header className="a-gap--xs a-stack a-stack--align-center f-listing__header f-plan__header">
      <h3 className="f-color--cloud-devops"><small>Cloud & DevOps</small> <strong>Flow</strong></h3>
      <p className="f-plan__description">Deploy faster, scale smarter, and stay secure with DevOps excellence.</p>
    </header>
    <ul className="f-plan__features">
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">CI/CD Pipeline Setup</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Docker & Kubernetes</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">AWS, Azure, GCP Deployment</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Cloud Architecture Design</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Server Monitoring & Automation</li>
    </ul>
  </div>
</article>
<article className="f-border f-listing f-listing--active f-plan f-plan--consulting-strategy f-scroll--toY0 hentry plan post-917 status-publish type-plan" style={{ "--i": 8 }}>
  <div className="a-gap--xxs a-stack f-listing__container f-plan__container">
    <header className="a-gap--xs a-stack a-stack--align-center f-listing__header f-plan__header">
      <h3 className="f-color--consulting-strategy"><small>Tech Strategy</small> <strong>Vision</strong></h3>
      <p className="f-plan__description">Build smarter with tailored tech guidance for your product roadmap.</p>
    </header>
    <ul className="f-plan__features">
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">MVP Planning & Wireframing</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Tech Stack Recommendations</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Scalability Planning</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Cost Optimization Strategy</li>
      <li className="f-badge f-badge--list f-badge--s f-badge--secret">Dedicated Consulting Hours</li>
    </ul>
  </div>
</article>



</div>

        <div className="a-gap--s a-stack f-services__groups">
          <article
            className="f-carousel f-carousel--marquee f-scroll--toY0 f-services f-services--bevel f-services--web-design js-carousel--marquee"
            data-speed="0.6"
          >
             <div className="marquee">
        <div className="marquee__inner">
          {marqueeItems.map((item, index) => (
            <div className="marquee__item" key={index}>
              {item}
            </div>
          ))}
          {/* Duplicate items to create infinite loop illusion */}
          {marqueeItems.map((item, index) => (
            <div className="marquee__item" key={`duplicate-${index}`}>
              {item}
            </div>
          ))}
        </div>
      </div>
          </article>
        </div>

       
      </div>
      
    </section>
  );
};

export default Getstarted;
