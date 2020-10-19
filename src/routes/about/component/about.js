import React from "react";
import { Helmet } from "react-helmet";

import Banner from "../../../components/banner/banner";
import Hero from "../../../components/hero/hero";
import "./about.css";
import im from '../../../assets/images/pdt1.webp'

function About() {
  return (
    <>
      <Hero hero="pagesHero">
        <Banner title="About Us" subtitle="Home / About">
          
        </Banner>
      </Hero>

      {/* Helmet to handle the SEO for the site */}
      <Helmet>
        <title>SolerChil Technologies | About Us</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="SolerChil Technologies is a solar refridgeration company that produces cost effiecient technology for the African market."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Helmet>
      <div className="heading">
        <p className="header-para">
          Solar power is better for the environment and saves money on your power bill but reliable and convenient, is
          it? <br />
          We help deliver convenient, smart and reliable power to your door step to cater for all your refrigeration
          needs.
          <br /> SolerChil Technologies' streamlined, cost-effective installation process and solar cooling technology
          is great if you live in an off grid place that has no direct link to the national grid. <br /> Our innovative
          technologies allow you to get the most out of the abundant sunlight.
        </p>
        <div></div>
      </div>
      {/* Start of the mission section  */}
      <div className="mission-container">
        <div className="mission">
          <h3>Our Mission</h3>
          <p>
            We will translate our advanced solar <br /> technologies in to value for our customers. Africa.
          </p>

          <h3>Our Vision</h3>
          <p>
            Utilize the power of Sun light to improve <br /> life of human being with fresh and quality foods while living off-grid. 
          </p>
        </div>

        <div>
          <img src={ im } alt="Mission and vision of the company" />
        </div>
      </div>
      {/* Start of the value proposition section  */}
      <div className="values-container">
        <div className="heading">
          <h2>What makes us different</h2>
          <p className="header-para">
            SolerChil Technologies strives to be the leading access provider to renewable <br />
            energy for refridgeration on the African continent.
          </p>
        </div>
        <div className="value">
          <div className="value-item">
            <img src={ im } alt="Value proposition " />
            <p className="caption">Research driven</p>
            <p className="caption">
              We are a research driven company that seeks to merge the gap between market needs and industry dynamics.
            </p>
          </div>

          <div className="value-item">
            <img src={ im } alt="Value proposition " />
            <p className="caption">Innovative </p>
            <p className="caption">
              We are the sole company that has ventured into solar powered refridgeration on the continent.
            </p>
          </div>

          <div className="value-item">
            <img src={ im } alt="Value proposition " />
            <p className="caption">Eco-friendly </p>
            <p className="caption">
              Reduction of the carbon footprint on the planet is a mission that is central to our operations.
            </p>
          </div>
        </div>
      </div>


    </>
  );
}

export default About;
