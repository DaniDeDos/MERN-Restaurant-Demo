import React from "react";
import { Link } from "react-router-dom";
import home from "../imgs/home.png";

const Home = () => {
  return (
    <>
      <section className="">
        <div className="content-center grid gap-5 grid-cols-2">
          <div className="home__data">
            <h1 className="m-0 mb-2 text-[2.5rem] text-[#069C54]">
              Tasty food
            </h1>
            <h2 className="mb-8 text-[1.5rem] text-[#393939]">
              Try the best food of <br /> the week.
            </h2>
            <Link
              to={"#"}
              className="btn-dark p-[.75rem] px-[1rem] rounded-[.5rem] transition-all duration-300"
            >
              View Menu
            </Link>
          </div>

          <div className="flex justify-center">
            <img src={home} alt="" className="h-auto w-[300px]" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
