import "./Products.scss";

import Product from "./Product/Product";

const Products = ({ topLevelPage, headingText }) => {
  return (
    <div className="products-container">
      {!topLevelPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};

export default Products;
