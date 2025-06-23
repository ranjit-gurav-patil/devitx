import React from 'react';

const WhatWeDo = () => (
    <>
  <section className="f-section f-section--how" id="process">
    <div className="a-container a-gap--m a-stack f-section__container">
      <header className="a-gap--s a-stack f-section__header f-section__header--center">
        <small className="f-badge f-badge--accent">Our Processes</small>
        <h2>How it works?</h2>
        <p>Over many years in the web design and development industry, we've perfected our website creation process to provide a complete end-to-end solution.</p>
      </header>
      <ul className="f-procedures">
        <li className="f-border f-listing f-procedure f-procedure--1 f-scroll--toY0" style={{ '--i': 1 }}>
          <span aria-hidden="true" className="f-border f-number">1</span>
          <h3>Become our partner</h3>
          <p>Select the <a href="https://devitx.com/#partnerships">Partnership</a> or <a href="https://devitx.com/#sprints">Sprint</a> that best suits your needs, and kick off our exciting collab.</p>
          <span className="f-icon">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="icon" fill="none" focusable="false" height="24" role="img" viewBox="0 0 24 24" width="24">
              <path d="M15 12L11.7071 15.2929C11.0771 15.9229 10 15.4767 10 14.5858V9.41421C10 8.52331 11.0771 8.07714 11.7071 8.70711L15 12Z" fill="#afe1e1"></path>
            </svg>
          </span>
        </li>
        <li className="f-border f-listing f-procedure f-procedure--2 f-scroll--toY0" style={{ '--i': 2 }}>
          <span aria-hidden="true" className="f-border f-number">2</span>
          <h3>Submit your project</h3>
          <p>Add your web project through your account, share your vision, outline your goals, and requirements.</p>
          <span className="f-icon">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="icon" fill="none" focusable="false" height="24" role="img" viewBox="0 0 24 24" width="24">
              <path d="M15 12L11.7071 15.2929C11.0771 15.9229 10 15.4767 10 14.5858V9.41421C10 8.52331 11.0771 8.07714 11.7071 8.70711L15 12Z" fill="#afe1e1"></path>
            </svg>
          </span>
        </li>
        <li className="f-border f-listing f-procedure f-procedure--3 f-scroll--toY0" style={{ '--i': 3 }}>
          <span aria-hidden="true" className="f-border f-number">3</span>
          <h3>We start crafting</h3>
          <p>While you focus on what you do best, we'll start crafting a website that brings your vision to reality.</p>
        </li>
      </ul>
      <div className="f-processes">
      <section className="f-process f-process--web-design">
        <header className="a-gap--xxs a-stack f-process__header f-section__header f-section__header--center" id="web-design">
          <span className="f-icon f-process__icon">
            <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="icon" fill="none" focusable="false" height="32" role="img" viewBox="0 0 32 32" width="32">
              <path d="M7.70711 9.70711C7.31658 9.31658 6.68342 9.31658 6.29289 9.70711L4.70711 11.2929C4.31658 11.6834 4.31658 12.3166 4.70711 12.7071L10.2929 18.2929C10.6834 18.6834 10.6834 19.3166 10.2929 19.7071L4.70711 25.2929C4.31658 25.6834 4.31658 26.3166 4.70711 26.7071L6.29289 28.2929C6.68342 28.6834 7.31658 28.6834 7.70711 28.2929L12.4142 23.5858C12.7893 23.2107 13 22.702 13 22.1716V15.8284C13 15.298 12.7893 14.7893 12.4142 14.4142L7.70711 9.70711Z" fill="#faafc8"></path>
              <path d="M24.2929 9.70711C24.6834 9.31658 25.3166 9.31658 25.7071 9.70711L27.2929 11.2929C27.6834 11.6834 27.6834 12.3166 27.2929 12.7071L21.7071 18.2929C21.3166 18.6834 21.3166 19.3166 21.7071 19.7071L27.2929 25.2929C27.6834 25.6834 27.6834 26.3166 27.2929 26.7071L25.7071 28.2929C25.3166 28.6834 24.6834 28.6834 24.2929 28.2929L19.5858 23.5858C19.2107 23.2107 19 22.702 19 22.1716V15.8284C19 15.298 19.2107 14.7893 19.5858 14.4142L24.2929 9.70711Z" fill="#faafc8"></path>
              <path d="M16 8L12.7071 4.70711C12.0771 4.07714 12.5233 3 13.4142 3H18.5858C19.4767 3 19.9229 4.07714 19.2929 4.70711L16 8Z" fill="#faafc8"></path>
            </svg>
          </span>
          <h3>Web Design</h3>
          <div className="a-gap--xxxs a-stack f-process__subtitle">
            <small>From your ideas into a working prototype in Figma.</small>
            <p>Share your ideas with us, and we'll do the rest.</p>
          </div>
        </header>
        <div className="a-gap--xs a-stack f-steps">
          <details className="f-border f-listing f-listing--open f-scroll--toY0 f-step is-style-plus" name="web-design">
            <summary className="f-step__summary" tabIndex="0">
              <h4>Analyzing &amp; Researching</h4>
            </summary>
            <div className="f-content f-step__content">
              Conducting thorough analysis and research to understand project requirements, target audience, competitors, and design trends, informing the design strategy.
            </div>
          </details>
          <details className="f-border f-listing f-listing--open f-scroll--toY0 f-step is-style-plus" name="web-design">
            <summary className="f-step__summary" tabIndex="0">
              <h4>Mapping</h4>
              <span className="f-badge f-badge--accent f-badge--s">+ Revisions</span>
            </summary>
            <div className="f-content f-step__content">
              Designing a comprehensive flow map of the website structure to ensure a seamless and intuitive user journey leading to conversion.
            </div>
          </details>
          <details className="f-border f-listing f-listing--open f-scroll--toY0 f-step is-style-plus" name="web-design">
            <summary className="f-step__summary" tabIndex="0">
              <h4>Wireframing</h4>
              <span className="f-badge f-badge--accent f-badge--s">+ Revisions</span>
            </summary>
            <div className="f-content f-step__content">
              Creating initial wireframes to outline the structure and layout of the website, followed by iterative revisions to refine the design and functionality.
            </div>
          </details>
          <details className="f-border f-listing f-listing--open f-scroll--toY0 f-step is-style-plus" name="web-design">
            <summary className="f-step__summary" tabIndex="0">
              <h4>Designing</h4>
              <span className="f-badge f-badge--accent f-badge--s">+ Revisions</span>
            </summary>
            <div className="f-content f-step__content">
              Developing visual designs that incorporate branding elements, color schemes, typography, and imagery, with ongoing revisions to achieve the desired aesthetic and usability.
            </div>
          </details>
          <details className="f-border f-listing f-listing--open f-scroll--toY0 f-step is-style-plus" name="web-design">
            <summary className="f-step__summary" tabIndex="0">
              <h4>Prototyping</h4>
              <span className="f-badge f-badge--accent f-badge--s">+ Revisions</span>
            </summary>
            <div className="f-content f-step__content">
              Building interactive prototypes to simulate the user experience and functionality of the website, allowing for feedback and revisions to refine the design before final implementation.
            </div>
          </details>
          <details className="f-border f-listing f-listing--open f-scroll--toY0 f-step is-style-plus" name="web-design">
            <summary className="f-step__summary" tabIndex="0">
              <h4>Delivering in Figma</h4>
            </summary>
            <div className="f-content f-step__content">
              Finalizing and delivering the design assets and specifications to the client using Figma, facilitating easy collaboration, feedback, and handoff to developers.
            </div>
          </details>
        </div>
        <footer className="f-process__goal f-scroll--toY0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="icon"
            fill="none"
            focusable="false"
            height="64"
            role="img"
            viewBox="0 0 64 64"
            width="64"
          >
            <circle cx="12" cy="40" fill="#faafc8" r="1"></circle>
            <circle cx="52" cy="40" fill="#faafc8" r="1"></circle>
            <circle cx="52" cy="10" fill="#faafc8" r="1"></circle>
            <path
              d="M12 10h6"
              stroke="#faafc8"
              strokeLinecap="round"
              strokeWidth="2"
            ></path>
            <circle cx="11.5" cy="31.5" fill="#faafc8" r=".5"></circle>
            <circle cx="13.5" cy="31.5" fill="#faafc8" r=".5"></circle>
            <circle cx="15.5" cy="31.5" fill="#faafc8" r=".5"></circle>
            <path
              clipRule="evenodd"
              d="M31 32h-4a4 4 0 0 0 0 8h4v-8Zm-10 4a5.994 5.994 0 0 0 2.682 5A5.994 5.994 0 0 0 21 46a5.994 5.994 0 0 0 2.682 5A6 6 0 1 0 33 56V50.472A6 6 0 1 0 40.318 41 6 6 0 0 0 37 30H27a6 6 0 0 0-6 6Zm16 6a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm0-2a4 4 0 1 0 0-8h-4v8h4Zm-6 2h-4a4 4 0 0 0 0 8h4v-8Zm-4 10a4 4 0 1 0 4 4v-4h-4Z"
              fill="#faafc8"
              fillRule="evenodd"
            ></path>
            <path
              d="M49 46h6v-3h3V7h-3V4H9v3H6v36h3v3h6M20 18h24M26 22h12"
              stroke="#faafc8"
              strokeLinecap="round"
              strokeWidth="2"
            ></path>
            <path
              d="M3 1h6v6H3zM55 1h6v6h-6zM55 43h6v6h-6zM3 43h6v6H3z"
              stroke="#faafc8"
              strokeLinejoin="round"
              strokeWidth="2"
            ></path>
          </svg>
          <h4>
            You will receive a Figma prototype of your website or another digital
            product in the source <code>*.fig</code> file. <br />
            <strong>Ready for development!</strong>
          </h4>
        </footer>
        </section>
<section className="f-process f-process--web-development">
  <header className="a-gap--xxs a-stack f-process__header f-section__header f-section__header--center" id="web-development">
    <span className="f-icon f-process__icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        fill="none"
        focusable="false"
        height="32"
        role="img"
        viewBox="0 0 32 32"
        width="32"
      >
        <path
          d="M29 0L31.2929 2.29289C31.6834 2.68342 31.6834 3.31658 31.2929 3.70711L23.2426 11.7574C20.8995 14.1005 20.8995 17.8995 23.2426 20.2426L31.2929 28.2929C31.6834 28.6834 31.6834 29.3166 31.2929 29.7071L29 32L20.1716 23.1716C19.4214 22.4214 19 21.404 19 20.3431V11.6569C19 10.596 19.4214 9.57857 20.1716 8.82843L29 0Z"
          fill="#afc8fa"
        ></path>
        <path
          d="M3 0L0.707107 2.29289C0.316582 2.68342 0.316583 3.31658 0.707107 3.70711L8.75736 11.7574C11.1005 14.1005 11.1005 17.8995 8.75736 20.2426L0.707107 28.2929C0.316583 28.6834 0.316582 29.3166 0.707107 29.7071L3 32L11.8284 23.1716C12.5786 22.4214 13 21.404 13 20.3431V11.6569C13 10.596 12.5786 9.57857 11.8284 8.82843L3 0Z"
          fill="#afc8fa"
        ></path>
        <path
          d="M16 5L12.7071 1.70711C12.0771 1.07714 12.5233 0 13.4142 0H18.5858C19.4767 0 19.9229 1.07714 19.2929 1.70711L16 5Z"
          fill="#afc8fa"
        ></path>
      </svg>
    </span>
    <h3>Web Development</h3>
    <div className="a-gap--xxxs a-stack f-process__subtitle">
      <small>From your design into a performant WordPress website.</small>
      <p>Share your design with us, and we'll do the rest.</p>
    </div>
  </header>
  <div className="a-gap--xs a-stack f-steps">
    <details
      className="f-border f-listing f-listing--open f-scroll--toY0 f-step is-style-plus"
      name="web-development"
    >
      <summary className="f-step__summary" tabIndex="0">
        <h4>Analyzing &amp; Planning</h4>
      </summary>
      <div className="f-content f-step__content">
        Analyzing project requirements and planning the development process,
        including defining goals, timelines, resources, and milestones to ensure
        a structured approach.
      </div>
    </details>
    <details
      className="f-border f-listing f-listing--open f-scroll--toY0 f-step is-style-plus"
      name="web-development"
    >
      <summary className="f-step__summary" tabIndex="0">
        <h4>Programming &amp; Coding</h4>
      </summary>
      <div className="f-content f-step__content">
        Writing and implementing the code to develop the website's functionality,
        features, and integrations, following best practices and coding standards.
      </div>
    </details>
    <details
      className="f-border f-listing f-listing--open f-scroll--toY0 f-step is-style-plus"
      name="web-development"
    >
      <summary className="f-step__summary" tabIndex="0">
        <h4>Beta Setup &amp; Testing</h4>
        <span className="f-badge f-badge--accent f-badge--s">+ Revisions</span>
      </summary>
      <div className="f-content f-step__content">
        Setting up a beta version of the website for testing, including thorough
        assessments for accessibility and compatibility across different browsers
        and devices, with iterative revisions to address any issues.
      </div>
    </details>
    <details
      className="f-border f-listing f-listing--open f-scroll--toY0 f-step is-style-plus"
      name="web-development"
    >
      <summary className="f-step__summary" tabIndex="0">
        <h4>Production Setup &amp; Testing</h4>
        <span className="f-badge f-badge--accent f-badge--s">+ Revisions</span>
      </summary>
      <div className="f-content f-step__content">
        Configuring the production environment, including server or hosting setup
        and domain configuration, and conducting comprehensive testing for
        performance, cross-browser and cross-device compatibility, and search
        engine optimization (SEO), with ongoing revisions to optimize results.
      </div>
    </details>
    <details
      className="f-border f-listing f-listing--open f-scroll--toY0 f-step is-style-plus"
      name="web-development"
    >
      <summary className="f-step__summary" tabIndex="0">
        <h4>Launching &amp; Monitoring</h4>
      </summary>
      <div className="f-content f-step__content">
        Deploying the website to the live production environment and closely
        monitoring its performance, uptime, and user feedback to ensure a
        successful launch and ongoing optimization.
      </div>
    </details>
    
  </div>
</section>

</div>

    </div>
  </section>
</>
);

export default WhatWeDo;
      

