import React from 'react';
import ContentLoader from 'react-content-loader';

const Skelet = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={490}
    viewBox="0 0 280 490"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="136" cy="116" r="116" />
    <rect x="0" y="278" rx="10" ry="10" width="276" height="76" />
    <rect x="1" y="370" rx="10" ry="10" width="85" height="30" />
    <rect x="125" y="368" rx="20" ry="20" width="150" height="35" />
  </ContentLoader>
);

export default Skelet;
