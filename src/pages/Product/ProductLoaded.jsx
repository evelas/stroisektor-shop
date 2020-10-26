import React from 'react';
import ContentLoader from 'react-content-loader';

const ProductLoaded = () => (
  <ContentLoader
    speed={1}
    width={768}
    height={375}
    viewBox="0 0 768 375"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb">
    <rect x="0" y="0" rx="0" ry="0" width="768" height="10" />
    <rect x="50" y="63" rx="0" ry="0" width="668" height="250" />
    <rect x="0" y="365" rx="0" ry="0" width="768" height="10" />
  </ContentLoader>
);

export default ProductLoaded;
