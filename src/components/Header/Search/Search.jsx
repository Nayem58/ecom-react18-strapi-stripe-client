import "./Search.scss";

import { MdClose } from "react-icons/md";

import ProdThumb from "../../../assets/products/earbuds-prod-1.webp";

const Search = ({ setShowSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search for Items" />
        <MdClose
          className="close-btn"
          onClick={() => {
            setShowSearch(false);
          }}
        />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          <div className="search-result-item">
            <div className="image-container">
              <img src={ProdThumb} alt={ProdThumb} />
            </div>
            <div className="prod-details">
              <div className="name">Name</div>
              <div className="desc">Description</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
