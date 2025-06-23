import React, { useEffect } from "react";
import Home from "./components/Home/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'; // ✅ Fixed HTTPS
    script.type = 'text/javascript';
    script.async = true;

    script.onload = () => {
      try {
        window.fnames = [];
        window.ftypes = [];
        window.fnames[0] = 'EMAIL';
        window.ftypes[0] = 'email';
        console.log('✅ Mailchimp script loaded successfully.');
      } catch (e) {
        console.error('❌ Error initializing Mailchimp fields:', e);
      }
    };

    script.onerror = () => {
      console.error('❌ Mailchimp script failed to load.');
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="main-wrapper">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
