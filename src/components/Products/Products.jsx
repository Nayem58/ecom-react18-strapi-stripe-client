import "./Products.scss";

import Product from "./Product/Product";

const Products = ({ products, topLevelPage, headingText }) => {
  return (
    <div className="products-container">
      {!topLevelPage && <div className="sec-heading">{headingText}</div>}
      <div className="products">
        {products?.data?.map((product) => {
          return (
            <Product
              key={product.id}
              id={product.id}
              data={product.attributes}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
