import React from "react";

const HeroSection = () => {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 text-md-start text-center">
          <p className="fs-1">
            <span className="text-primary fst-italic">Explore the World, </span>
            One Country at a Time.
          </p>
          <p className="lead" style={{ maxWidth: "700px" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex eius
            dolores fuga tempora deleniti ratione id accusamus deserunt
            recusandae esse? Suscipit, voluptas maxime! Error cumque accusantium
            totam cupiditate magni eveniet!
          </p>

          <button className="btn btn-primary px-4 py-2 rounded-pill">
            Start Exploring
          </button>
        </div>

        <div className="col-md-6 text-center my-5 my-md-0">
          <img
            style={{ height: "300px", width: "320px" }}
            src="https://pngimg.com/d/globe_PNG33.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
