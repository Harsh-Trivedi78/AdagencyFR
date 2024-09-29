  import React from 'react';
  // import './App.css';

  const App = () => {
    return (
      <div>
        {/* Header Section */}
        <header className="header">
          <h1>What We Do</h1>
          <nav>
            <a href="/home">Home</a> / <span>Our Work and Pricing Model</span>
          </nav>
        </header>

        {/* Services Section */}
        <section className="services">
          <div className="service-description">
            <h2>We are creative</h2>
            <p>
              Transforming Businesses with Innovative Strategies and Cutting-Edge Technology
            </p>
          </div>
          <div className="features">
            <div className="feature">
              <i className="icon">💡</i>
              <h3>Flexible Pricing Plans</h3>
              <p>Choose a plan that fits your business needs, with transparent pricing and no hidden fees.</p>
            </div>
            <div className="feature">
              <i className="icon">🔒</i>
              <h3>Secure Transactions</h3>
              <p>Rest assured that all transactions are secure and protected with the latest encryption technology.</p>
            </div>
            <div className="feature">
              <i className="icon">🛠️</i>
              <h3>Dedicated Support</h3>
              <p>Get the help you need with our dedicated support team, available 24/7 to assist you.</p>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="pricing">
          <h2>No Hidden Charges. Choose Your Perfect Plan</h2>
          <div className="pricing-cards">
            <div className="pricing-card">
              <h3>Basic - Commission Based</h3>
              <h4>199/- Monthly</h4>
              <p>Includes:</p>
              <ul>
                <li>1 target post per week</li>
                <li>Reading Advertisements</li>
                <li>Basic Customer Support</li>
                <li>Secure payment</li>
                <li>Cancel any time</li>
              </ul>
              <button>Contact Us</button>
            </div>
            <div className="pricing-card">
              <h3>Premium - Fee Based</h3>
              <h4>499/- Monthly</h4>
              <p>Includes:</p>
              <ul>
                <li>4 target posts per week</li>
                <li>Creating, Planning, and Advertising</li>
                <li>24/7 Customer Support</li>
                <li>Secure payment</li>
                <li>Cancel any time</li>
              </ul>
              <button>Contact Us</button>
            </div>
          </div>
        </section>

        
        {/* <footer>
          <div className="footer-content">
            <div className="company">
              <h4>Company</h4>
              <p>Terms & Conditions</p>
              <p>Privacy Policy</p>
              <p>Support</p>
              <p>FAQ</p>
            </div>
            <div className="quick-links">
              <h4>Quick Links</h4>
              <p>About</p>
              <p>Services</p>
              <p>Contact</p>
            </div>
            <div className="subscribe">
              <h4>Subscribe Us</h4>
              <p>Subscribe for our latest news and articles</p>
              <input type="email" placeholder="Your email" />
              <button>Subscribe</button>
            </div>
            <div className="contact">
              <h4>BrandingBoosters</h4>
              <p>Email: theboosters@gmail.com</p>
              <p>Phone: +91-9006262366</p>
            </div>
          </div>
          <div className="footer-bottom">
            <p>Copyright © 2023, Designed & Developed by TheRedTeam</p>
          </div>
        </footer> */}
      </div>
    );
  };

  export default App;