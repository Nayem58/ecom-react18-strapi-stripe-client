import "./Product.scss";

import productThumb from "../../../assets/products/earbuds-prod-1.webp";

const Product = () => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img src={productThumb} alt={productThumb} />
      </div>
      <div className="prod-details">
        <div className="name">Earbud</div>
        <div className="price">&#2547; 999</div>
      </div>
    </div>
  );
};

export default Product;
