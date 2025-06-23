// src/components/Footer.js
import React, { useEffect, useRef } from 'react';
import deviteslogo from '../assets/deviteslogo.png';
import './Footer.css';

function Footer() {
  const tweetRef = useRef(null);

  useEffect(() => {
  try {
    
    const script = document.createElement('script');
    script.src = 'https://platform.twitter.com/widgets.js';
    script.async = true;
    script.onerror = (e) => console.error('Twitter script load error', e);
    document.body.appendChild(script);
  } catch (e) {
    console.error('Script inject error', e);
  }
}, []);
  return (
    <footer className="footer-glow">
      <div className="footer-container">
        <div className="footer-column">
          <img
            src={deviteslogo}
            alt="Devites Logo"
            className="footer-logo"
          />
          <h4 style={{ "margin": '0' }}>Sign Up For Our Newsletter</h4>
          <form
            action="https://devitx.us19.list-manage.com/subscribe/post?u=14412fefabebc07ddd3db75bd&amp;id=21226cd91e&amp;f_id=000235e7f0"
            method="post"
            target="_blank"
            rel="noreferrer"
            noValidate
            className="newsletter-form"
          >
            <input
              type="email"
              name="EMAIL"
              placeholder="Enter your email"
              required
            />
            <button type="submit">Subscribe</button>
          </form>
        </div>

        {/* Middle: Social Feeds */}
        <div className="footer-column">
          <h4>Latest Tweets</h4>
          <div className="social-embed" ref={tweetRef}>
            <blockquote className="twitter-tweet" data-media-max-width="560">
              <p lang="en" dir="ltr">
                👋 Hello!
                <br />
                We’re Devitx – your digital launchpad for all things tech.
                <br />
                <br />
                Let’s build your next big thing 👉{' '}
                <a href="https://t.co/gJkcimWz64">https://t.co/gJkcimWz64</a>
                <a href="https://twitter.com/hashtag/Devitx?src=hash&amp;ref_src=twsrc%5Etfw">#Devitx</a>{' '}
                <a href="https://twitter.com/hashtag/SaaS?src=hash&amp;ref_src=twsrc%5Etfw">#SaaS</a>{' '}
                <a href="https://twitter.com/hashtag/WebDevelopment?src=hash&amp;ref_src=twsrc%5Etfw">#WebDevelopment</a>{' '}
                <a href="https://twitter.com/hashtag/AI?src=hash&amp;ref_src=twsrc%5Etfw">#AI</a>{' '}
                <a href="https://twitter.com/hashtag/Startups?src=hash&amp;ref_src=twsrc%5Etfw">#Startups</a>{' '}
                <a href="https://twitter.com/hashtag/Blockchain?src=hash&amp;ref_src=twsrc%5Etfw">#Blockchain</a>{' '}
                <a href="https://twitter.com/hashtag/TechPartner?src=hash&amp;ref_src=twsrc%5Etfw">#TechPartner</a>{' '}
                <a href="https://t.co/RgcDdShUXg">pic.twitter.com/RgcDdShUXg</a>
              </p>
              — social@devitx.com (@devitxofficial){' '}
              <a href="https://twitter.com/devitxofficial/status/1936863155625574837?ref_src=twsrc%5Etfw">
                June 22, 2025
              </a>
            </blockquote>
          </div>

          
        </div>

        {/* Right: Contact Info */}
        <div className="footer-column">
          <h4 >Contact</h4>
           <p><strong>Email:</strong> business@devitx.com</p>
          <p><strong>Phone:</strong> +91 8208835994</p>
          <p><strong>Phone:</strong> +91 9834493006</p>
          <p><strong>Phone:</strong> +91 86059 39166</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
