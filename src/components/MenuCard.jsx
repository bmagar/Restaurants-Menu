import React from "react";

const MenuCard = ({ menuData }) => {
  return (
    <>
      <section className="container mt-5">
        <div className="main-card--cointainer">
          {menuData.map((curElem) => {
            const { id, image, name, category, price, description } = curElem;
            return (
              <>
                <div className="card">
                  <div className="card-body">
                    <span className="card-number card-circle subtle">{id}</span>
                    {/* <span className="card-author subtle">BreakFast</span> */}
                    <h2 className="main-header">{name}</h2>
                    <span className="card-description subtle">
                      {description}
                    </span>
                  </div>
                  <div className="object-fit-wrapper">
                    <img className="object-fit-bg" src={image} alt="" />
                  </div>
                  <button className="btn-primary">Order Now</button>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default MenuCard;
