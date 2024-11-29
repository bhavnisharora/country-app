import React, { useEffect, useState } from "react";
import { getCountryData } from "../api/PostApi";
import Loader from "../components/ui/Loader";
import { Link } from "react-router-dom";
import SearchFilter from "../components/ui/SearchFilter";

const Country = () => {
  const [data, setData] = useState([]); // Full data
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCountryData();
        setData(res.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <Loader />;
  if (error) return <h1> Error: {error} </h1>;

  // Filter and Search Logic
  const filteredCountries = data
    .filter((elem) => {
      if (filter === "all") return true;
      return elem.region.toLowerCase() === filter.toLowerCase();
    })
    .filter((elem) => {
      if (search) {
        return elem.name.common.toLowerCase().includes(search.toLowerCase());
      }
      return true;
    });

  return (
    <div className="container my-5">
      <SearchFilter
        filter={filter}
        setFilter={setFilter}
        search={search}
        setSearch={setSearch}
      />
      <div className="row row-cols-1 row-cols-md-4 row-cols-sm-2 gap-3 mx-5 my-5">
        {filteredCountries.map((elem, index) => (
          <div key={index} className="card shadow" style={{ width: "18rem" }}>
            <img
              src={elem.flags?.svg || "not found"}
              className="card-img-top mt-2"
              style={{ height: "150px", objectFit: "cover" }}
              alt={`${elem.name.common} flag`}
            />
            <div className="card-body">
              <p className="card-title fw-bold">
                {elem.name.common.length > 20
                  ? elem.name.common.slice(0, 20) + "..."
                  : elem.name.common}
              </p>
              <p className="card-text">
                Capital: {elem.capital?.join(", ") || "N/A"}
              </p>
              <p className="card-text">
                Population: {elem.population.toLocaleString()}
              </p>

              <Link to={`/name/${elem.name.common}`}>
                <button className="rounded btn btn-dark text-light btn-sm">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Country;
