import { useEffect, useContext } from "react";
import { fetchDataFromApi } from "../../utils/api";
import { Context } from "../../utils/context";

import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import Products from "../Products/Products";

import "./Home.scss";

const Home = () => {
  const { categories, setCategories, products, setProducts } =
    useContext(Context);

  useEffect(() => {
    getCategories();
    getProducts();
  }, []);

  const getCategories = () => {
    fetchDataFromApi("/api/categories?populate=*")
      .then((res) => {
        setCategories(res);
      })
      .catch((error) => {
        console.log("Error fetching categories:", error);
      });
  };

  const getProducts = () => {
    fetchDataFromApi("/api/products?populate=*")
      .then((res) => {
        setProducts(res);
      })
      .catch((error) => {
        console.log("Error fetching products:", error);
      });
  };

  // if (
  //   !categories ||
  //   categories.length === 0 ||
  //   !products ||
  //   products.length === 0
  // ) {
  //   // Render a loading state or return null while categories or products are being fetched
  //   return null;
  // }
  // instead of this, I'm using the optional chaining

  return (
    <div className="home">
      <Banner />
      <div className="main-content">
        <div className="layout">
          <Category categories={categories} />
          <Products headingText="Popular Products" products={products} />
        </div>
      </div>
    </div>
  );
};

export default Home;
