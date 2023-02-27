import React from "react";

const Hero = () => {
  return (
    <section className="hero container two-columns">
      <div className="hero__info">
        <h1 className="primary-color">
          Bring everyone together to build better products.
        </h1>
        <p className="secondary-color">
          Manage makes it simple for software teams to plan day-to-day tasks
          while keeping the larger team goals in view.
        </p>
      </div>
      <div className="bg-blob">
        <img src="./assets/images/illustration-intro.svg" alt="" />
      </div>
    </section>
  );
};

export default Hero;
