import React from "react"
import ContentLoader from "react-content-loader"

const ProductLoaded = () => (
  <ContentLoader 
    speed={1}
    width={280}
    height={455}
    viewBox="0 0 280 455"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"

  >
    <rect x="0" y="22" rx="0" ry="0" width="280" height="227" /> 
    <rect x="0" y="259" rx="0" ry="0" width="280" height="40" /> 
    <rect x="-1" y="319" rx="0" ry="0" width="280" height="46" /> 
    <rect x="155" y="393" rx="0" ry="0" width="125" height="42" /> 
    <rect x="0" y="393" rx="0" ry="0" width="91" height="42" />
  </ContentLoader>
)

export default ProductLoaded;