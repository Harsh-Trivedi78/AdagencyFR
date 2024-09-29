import React from "react";
import { FaDesktop, FaPencilAlt, FaCogs, FaMobileAlt, FaLightbulb, FaPenFancy, FaChartLine, FaTag } from "react-icons/fa";
import '../contact.css'
import Lottie from 'lottie-react';
import animationData from '../Animation - 1726897374433.json';

const HomePage = () => {
  return (
    <div>
{/* Hero Section */}
{/* Hero Section */}
<section className="hero-section">
  <div className="container">
    <div className="hero-content">
      <Lottie
        animationData={animationData}
        loop={true}
        autoplay={true}
        style={{
          width: 750, // increased width
          height: 100, // increased height
          marginRight: 10,
          marginLeft:10,
        }}
      />
      <h1>Our work is a presentation of our capabilities.</h1>
    </div>
  </div>
</section>

      {/* Services Introduction */}
      <section className="services-intro">
        <div className="container">
          <h2>We work with business & provide solutions to client with their business problems</h2>
          <div className="services-intro-grid">
            <div className="service">
              <FaDesktop className="icon" />
              <h3>Modern & Responsive Design</h3>
              <p>
                For a modern and responsive ad agency website, prioritize clean, minimalist design with intuitive
                navigation to ensure a seamless user experience across all devices.
              </p>
            </div>
            <div className="service">
              <FaPencilAlt className="icon" />
              <h3>Build Your Website Professionally</h3>
              <p>
                At our agency, we specialize in turning your vision into reality by creating tailored websites that
                meet your unique needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <h2>We provide a wide range of creative services</h2>
          <div className="services-grid">
            <div className="service">a
              <FaCogs className="icon" />
              <h3>Web Development</h3>
              <p>A digital agency isn't here to replace your internal team, we're here to partner.</p>
            </div>
            <div className="service">
              <FaMobileAlt className="icon" />
              <h3>Interface Design</h3>
              <p>A digital agency isn't here to replace your internal team, we're here to partner.</p>
            </div>
            <div className="service">
              <FaLightbulb className="icon" />
              <h3>Business Consulting</h3>
              <p>A digital agency isn't here to replace your internal team, we're here to partner.</p>
            </div>
            <div className="service">
              <FaTag className="icon" />
              <h3>Branding</h3>
              <p>A digital agency isn't here to replace your internal team, we're here to partner.</p>
            </div>
            <div className="service">
              <FaChartLine className="icon" />
              <h3>App Development</h3>
              <p>A digital agency isn't here to replace your internal team, we're here to partner.</p>
            </div>
            <div className="service">
              <FaPenFancy className="icon" />
              <h3>Content Creation</h3>
              <p>A digital agency isn't here to replace your internal team, we're here to partner.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;