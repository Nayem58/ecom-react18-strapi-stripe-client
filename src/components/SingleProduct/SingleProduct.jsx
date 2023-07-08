import "./SingleProduct.scss";

import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaPinterest,
  FaCartPlus,
} from "react-icons/fa";

import ProdThumb from "../../assets/products/earbuds-prod-1.webp";

const SingleProduct = () => {
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={ProdThumb} alt={ProdThumb} />
          </div>
          <div className="right">
            <div className="name">Name</div>
            <div className="price">Price</div>
            <div className="desc">Desc</div>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span>-</span>
                <span>0</span>
                <span>+</span>
              </div>
              <button className="add-to-cart-button">
                <FaCartPlus size={20} />
                ADD TO CART
              </button>
            </div>
            <span className="divider"></span>
            <div className="info-item">
              <div className="text-bold">
                Category: <span>Headphones</span>
              </div>
              <div className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebook size={16} />
                  <FaTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaInstagram size={16} />
                  <FaPinterest size={16} />
                </span>
              </div>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default SingleProduct;
