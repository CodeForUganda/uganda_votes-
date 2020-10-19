import React from "react";
import { Helmet } from "react-helmet";

import Banner from "../../../components/banner/banner";
import Hero from "../../../components/hero/hero";

const NotFoundPage = () => {
  return (
    <>
      <Hero hero="pagesHero">
        <Banner title="404" subtitle="Page not found."></Banner>
      </Hero>

      {/* Helmet to handle the SEO for the site */}
      <Helmet>
        <title>SolerChil Technologies | 404</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="SolerChil Technologies is a solar refridgeration company that produces cost effiecient technology for the African market."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
      </Helmet>
    </>
  );
};

export default NotFoundPage;
