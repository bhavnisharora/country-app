import React from "react";
import CountriesFacts from "../api/CountryData.json";
const About = () => {
  return (
    <div className="my-5">
      <p className="display-4 fw-normal text-dark text-center my-5 fst-italic">
        Interes<span className="text-primary">ting </span>
        <span className="fs-bold text-primary fst-normal">
          <span className="text-dark">Fa</span>cts
        </span>
      </p>

      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 gap-2 mx-5">
        {CountriesFacts.map((elem) => {
          const { id, countryName, capital, population, interestingFacts } =
            elem;
          return (
            <div className="card border" style={{ width: "18rem" }}>
              <div className="card-body">
                <p className="fs-4 card-title text-primary fw-normal">
                  {countryName}
                </p>
                <p className="card-subtitle mb-2 lead">{capital}</p>
                <p className="card-subtitle mb-2 lead">{population}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default About;
