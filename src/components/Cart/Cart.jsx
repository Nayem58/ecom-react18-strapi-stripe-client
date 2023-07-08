import "./Cart.scss";

import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";

import CartItem from "./CartItem/CartItem";

const Cart = ({ setShowCart }) => {
  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <div className="heading">Shopping Cart</div>
          <div className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">Close</span>
          </div>
        </div>
        {/* <div className="empty-cart">
          <BsCartX />
          <span>No Products Added to the Cart</span>
          <button className="return-cta" onClick={() => setShowCart(false)}>
            Return
          </button>
        </div> */}

        <CartItem />
        <div className="cart-footer">
          <div className="subtotal">
            <div className="text">Subtotal: </div>
            <div className="text total">&#2547; </div>
          </div>
          <div className="button">
            <button className="checkout-cta">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
