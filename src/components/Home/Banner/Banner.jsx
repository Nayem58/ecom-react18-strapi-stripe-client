import "./Banner.scss";

import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
  return (
    <div className="hero-banner">
      <div className="content">
        <div className="text-content">
          <h1>FREE</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut est
            aliquid, atque distinctio cum quaerat et reiciendis sit incidunt
            rem!
          </p>
          <div className="ctas">
            <div className="banner-cta">Read More</div>
            <div className="banner-cta v2">Shop Now</div>
          </div>
        </div>
        <img className="banner-img" src={BannerImg} alt="Nura Headphone" />
      </div>
    </div>
  );
};

export default Banner;
