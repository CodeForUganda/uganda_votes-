import React from 'react'
import './contributors.css'
import { Helmet } from 'react-helmet';
import Banner from '../../../components/banner'
import Hero from '../../../components/hero'


const Contributors = () => {
  return (
    <>
      <Hero hero="">
        <Banner title="Contributors" >
        </Banner>
      </Hero>


      {/* Helmet for SEO and page title */ }
      <Helmet>
        <title>Code for Uganda | Contributors</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Code for Uganda is a non-for-profit organization aiming to make accurate, verifibale and open data to the public and other development partners " />
      </Helmet>

      <div className="contributors-container">
        <h1>We are a team of open source software writers and journalists that are <br />
        championing the development and use of open source data in Uganda.
        </h1>
        <div className="contributors"></div>
      </div>
    </>
  )
}

export default Contributors;