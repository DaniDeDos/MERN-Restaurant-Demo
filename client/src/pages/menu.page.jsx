import React from "react";
import plate1 from "../imgs/plate1.png";
import plate2 from "../imgs/plate2.png";
import plate3 from "../imgs/plate3.png";

const Menu = () => {
  return (
    <main className="l-main">
      <section className="menu section bd-container" id="menu">
        <span className="section-subtitle">Special</span>
        <h2 className="section-title">Menu of the week</h2>

        <div className="menu__container bd-grid">
          <div className="menu__content">
            <img src={plate1} alt="" class="menu__img" />
            <h3 className="menu__name">Barbecue salad</h3>
            <span className="menu__detail">Delicious dish</span>
            <span className="menu__preci">$22.00</span>
            <a href="#" className="button menu__button">
              <i className="bx bx-cart-alt"></i>
            </a>
          </div>

          <div className="menu__content">
            <img src={plate2} alt="" class="menu__img" />

            <h3 className="menu__name">Salad with fish</h3>
            <span className="menu__detail">Delicious dish</span>
            <span className="menu__preci">$12.00</span>
            <a href="#" className="button menu__button">
              <i className="bx bx-cart-alt"></i>
            </a>
          </div>

          <div className="menu__content">
            <img src={plate3} alt="" class="menu__img" />

            <h3 className="menu__name">Spinach salad</h3>
            <span className="menu__detail">Delicious dish</span>
            <span className="menu__preci">$9.50</span>
            <a href="#" className="button menu__button">
              <i className="bx bx-cart-alt"></i>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Menu;
