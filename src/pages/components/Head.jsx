import React from "react";
import { Helmet } from "react-helmet";

export default function Head({ title, description, keywords }) {
  return (
    <Helmet>
      <title>Idris Vohra - {title}</title>
      <meta
        name="description"
        content={description}
      />
      <meta
        name="keywords"
        content={keywords}
      />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="Idris Vohra" />
      <meta name="twitter:title" content="Idris Vohra - Portfolio" />
      <meta
        name="twitter:description"
        content="This is a portfolio website of Full stack MERN Web developer Idris Vohra."
      />
      <meta
        name="twitter:image"
        content="https://avatars.githubusercontent.com/u/93969099?v=4"
      />
    </Helmet>
  );
}
