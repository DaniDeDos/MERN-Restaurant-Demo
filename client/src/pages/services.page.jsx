import React from "react";
import excellent from "../svg/excellent.svg";
import fast from "../svg/fast.svg";
import delivery from "../svg/delivery.svg";

const Services = () => {
  return (
    <main className="l-main">
      <section className="services section bd-container" id="services">
        <span className="section-subtitle">Offering</span>
        <h2 className="section-title">Our amazing services</h2>

        <div className="services__container  bd-grid">
          <div className="services__content">
            <img className="services__img" src={excellent} alt="" />
            <h3 className="services__title">Excellent food</h3>
            <p className="services__description">
              We offer our clients excellent quality services for many years,
              with the best and delicious food in the city.
            </p>
          </div>

          <div className="services__content">
            <img className="services__img" src={fast} alt="" />

            <h3 className="services__title">Fast food</h3>
            <p className="services__description">
              We offer our clients excellent quality services for many years,
              with the best and delicious food in the city.
            </p>
          </div>

          <div className="services__content">
            <img className="services__img" src={delivery} alt="" />

            <h3 className="services__title">Delivery</h3>
            <p className="services__description">
              We offer our clients excellent quality services for many years,
              with the best and delicious food in the city.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Services;
