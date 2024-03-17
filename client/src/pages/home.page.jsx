import React from "react";
import home from "../imgs/home.png";

function Home() {
  return (
    <main className="l-main">
      <section className="home" id="home">
        <div className="home__container bd-container bd-grid">
          <div className="home__data">
            <h1 className="home__title">Tasty food</h1>
            <h2 className="home__subtitle">
              Try the best food of <br /> the week.
            </h2>
            <a href="#" className="button">
              View Menu
            </a>
          </div>

          <img src={home} alt="" className="home__img" />
        </div>
      </section>
    </main>
  );
}

export default Home;
