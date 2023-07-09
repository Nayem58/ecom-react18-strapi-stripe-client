import { useNavigate } from "react-router-dom";

import "./Category.scss";

const Category = ({ categories }) => {
  const navigate = useNavigate();

  return (
    <div className="shop-by-category">
      <div className="categories">
        {categories?.data?.map((category) => {
          console.log(category);
          return (
            <div
              className="category"
              key={category.id}
              onClick={() =>
                navigate(
                  `/category/${
                    category.id +
                    category.attributes.titlex.toLowerCase().replace(/ /g, "_")
                  }`
                )
              }
            >
              <img
                src={
                  process.env.REACT_APP_DEV_URL +
                  category.attributes.img.data.attributes.url
                }
                alt={category.attributes.titlex}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
