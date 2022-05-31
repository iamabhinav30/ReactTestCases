
import React from "react";

const Article = ({ title, teaser, publishDate }) => (
  <section>
    <h2>{title}</h2>
    <h4>{teaser}</h4>
    <h6>{publishDate}</h6>
  </section>
);

export default Article;