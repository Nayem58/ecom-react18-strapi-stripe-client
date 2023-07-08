import "./CartItem.scss";

import { MdClose } from "react-icons/md";

import ProdThumb from "../../../assets/products/earbuds-prod-1.webp";

const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="image-container">
          <img src={ProdThumb} alt={ProdThumb} />
        </div>
        <div className="prod-details">
          <div className="name">Name</div>
          <MdClose className="close-btn" />
          <div className="quantity-buttons">
            <span>-</span>
            <span>0</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>0</span>
            <span>x</span>
            <span>&#2547; 00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
