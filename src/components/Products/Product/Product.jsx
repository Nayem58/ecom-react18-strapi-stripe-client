import "./Product.scss";

const Product = ({ id, data }) => {
  return (
    <div className="product-card">
      <div className="thumbnail">
        <img
          src={process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url}
          alt={data.title}
        />
      </div>
      <div className="prod-details">
        <div className="name">{data.title}</div>
        <div className="price">&#2547; {data.price}</div>
      </div>
    </div>
    // console.log(process.env.REACT_APP_DEV_URL + img.data[0].attributes.url)
  );
};

export default Product;
