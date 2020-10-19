import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

// File and image imports
import Banner from "../../../components/banner/banner";
import Hero from "../../../components/hero/hero";
import "./home.css";
import {
  FaCheck,
  FaLockOpen,
  FaUniversalAccess,
} from "react-icons/fa";
import initiatives from '../../../assets/images/initiatives.jpg'


function Home () {
  return (
    <>
      <Hero>
        <Banner
          title=" Lorem ipsum anim voluptate duis consectetur mollit aliquip laborum veniam id ullamco dolore culpa."

          subtitle="We strive to be the leading renewable energy  industry market leaders in Africa."
        >
          <Link to="/contact" className="btn-primary">
            Contact Us
          </Link>
        </Banner >
      </Hero>

      {/* Helmet to handle the SEO for the site */ }
      <Helmet>
        <title>Code4Uganda | Home</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Labore ea et voluptate fugiat tempor sunt laborum esse minim commodo laborum sed laboris pariatur excepteur."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
      </Helmet>

      <div className="separation"></div>
      <div className="text-container">
        <div className="text">
          <h2>Who we are</h2>
          <h4>Open data. Actionable insights.</h4>
        </div>

        <div className="text-container-main ">
          <div className="text-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              laboriosam adipisci nemo quo! Ullam aut qui voluptatem molestias
            reiciendis repudiandae <strong>necessitatibus</strong> quidem eaque
              doloribus et fugiat magni dicta, ut tempora repellat laborum quia,
              hic maiores aliquam aspernatur temporibus facere perspiciatis!
          </p>
          </div>
          <div className="text-container">

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
              laboriosam adipisci nemo quo! Ullam aut qui voluptatem molestias
            reiciendis <strong>repudiandae necessitatibus </strong>quidem eaque
            doloribus et fugiat magni dicta, ut tempora{ " " }
              <strong>repellat laborum</strong> quia, hic maiores aliquam
            aspernatur temporibus facere perspiciatis!
          </p>

          </div>
        </div>
      </div>

      <div className="heading">
        <h2 className="title">Our values</h2>
        <p><strong>Open data and tools.
          <br />
          Better decision making.</strong></p>
        <div></div>
      </div>

      <div className="home">
        <div className="home-item">
          <h3 className="home-caption caption-para">Open </h3>
          <FaLockOpen className="icon-img" />
          <p className="home-caption">
          </p>
        </div>

        <div className="home-item">
          <h3 className="home-caption caption-para">Accurate </h3>
          <FaCheck className="icon-img" />
          <p className="home-caption">

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem temporibus architecto libero culpa eius aut, dolor id odit nam ullam.
          </p>
        </div>

        <div className="home-item">
          <h3 className="home-caption caption-para">Accessible </h3>
          <FaUniversalAccess className="icon-img" />
          <p className="home-caption">

            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem temporibus architecto libero culpa eius aut, dolor id odit nam ullam.
          </p>
        </div>
      </div>
      {/* Get involved  */ }

      <div className="get-involved">
        <h2>Get involved </h2>
        <p>
          Do you want to participate in shaping the future of <br /> open data
          access to data in Uganda?
        </p>

        <Link to="https://www.facebook.com/CodeForUganda" target="_blank" no-referrer>                                                                 <button>JOIN THE CODE for UGANDA COMMUNITY</button>
        </Link>
      </div>

      {/*Initiatives*/ }
      <div className="initiatives">
        <h2>Initiatives</h2>
        <p className="initiatives-para">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <br />
          Itaque corrupti praesentium voluptates nobis sapiente
          </p>
        <div className="initiatives-container">

          <div className="image-container child">
            <img src={ initiatives } alt="Initiatives that the organizations has taken " />
          </div>

          <div className="initiatives-text-container child">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque corrupti praesentium voluptates nobis sapiente tempore blanditiis fuga et aspernatur rerum!
          </p>
            <br />
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque corrupti praesentium voluptates nobis sapiente tempore blanditiis fuga et aspernatur rerum!</p>

            <Link to="https://www.ugandavotes.com" target="_blank" no-referrer><button>Read More</button></Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
