import React from "react";
import "./ExploreMenu.css";
// import { menu_list } from "../../assets/data/menu_list";]
import { menu_list } from "./../../../assets/assets";

const ExploreMenu = ({ category, setCategory }) => {
  return (
    <div className="explore-menu" id="explore-menu">
      <h1>explore our menu</h1>
      <p className="explore-menu-text">
        Whether you are craving classic comfort food, vibrant vegetarian dishes,
        or rich savory mains, our diverse menu has something for every palate.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => {
          return (
            <div
              key={index}
              onClick={() =>
                setCategory(
                  category === item.menu_name ? "All" : item.menu_name,
                )
              }
              className="explore-menu-list-item"
            >
              <img
                className={category == item.menu_name ? "active" : ""}
                src={item.menu_image}
                alt={item.name}
              />
              <p>{item.menu_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreMenu;
