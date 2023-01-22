import React, { useState } from "react";
import "./style.css";
import Menu from "./Api/MenuApi";
import MenuCard from "./MenuCard";

const Resturant = () => {
  const [menuData, setMenuData] = useState(Menu);

  // adding function for navbar button
  const filterItem = (hello) => {
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === hello;
    });
    setMenuData(updatedList);
  };

  return (
    <>
      <nav className="navbar container mt-5">
        <div className="btn-group">
          <button
            className="btn-group-item"
            onClick={() => filterItem("appetizer")}>
            Appetizer
          </button>
          <button
            className="btn-group-item"
            onClick={() => filterItem("dishes")}>
            Dishes
          </button>
          <button
            className="btn-group-item"
            onClick={() => filterItem("biryani")}>
            Biryani
          </button>
          <button
            className="btn-group-item"
            onClick={() => filterItem("chicken specialist")}>
            Curry
          </button>
          <button className="btn-group-item" onClick={() => setMenuData(Menu)}>
            All
          </button>
        </div>
      </nav>
      <MenuCard menuData={menuData} />
    </>
  );
};

export default Resturant;
