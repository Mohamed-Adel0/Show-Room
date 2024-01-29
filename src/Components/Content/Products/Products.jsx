import React from "react";
import Css from "./Products.module.css";
import Picture1 from "../../Picture/dm29__projects_02-min.jpg";
import Picture2 from "../../Picture/nor_portfolio_item__27.jpg";
import Picture3 from "../../Picture/nor_portfolio_item__28.jpg";
import Picture4 from "../../Picture/nor_portfolio_item__29.jpg";

const Products = () => {

  const items = [
    {
      id: 1,
      image: Picture1,
      title: "View Fullscreen",
    },
    {
      id: 2,
      image: Picture2,
      title: "View Fullscreen",
    },
    {
      id: 3,
      image: Picture3,
      title: "View Fullscreen",
    },
    {
      id: 4,
      image: Picture4,
      title: "View Fullscreen",
    },
  ];

  return (
    <div>
      <div className={Css.parent} id="products">
        <div className={Css.container}>
          {items?.map((r) => (
            <div
              className={Css.card}
              key={r.id}
              data-aos="fade-up"
              data-aos-anchor-placement="top-bottom"
            >
              <div className={Css.img}>
                <img src={r.image} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
