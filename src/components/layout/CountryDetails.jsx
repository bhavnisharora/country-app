import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loader from "../ui/Loader";
import { getCountryInvData } from "../../api/PostApi";
const CountryDetails = () => {
  const params = useParams();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCountryInvData(params.id);
        if (res.status === 200) {
          setCountry(res.data || []);
          console.log(res.data);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [params.id]);

  if (loading) return <Loader />;
  if (error) return <h1> Error: {error} </h1>;

  return (
    <>
      <p className="my-5 display-4 text-center">Country Details Page</p>
      <div className="d-flex justify-content-center">
        {country.map((elem, i) => (
          <div className="countryDetails" key={i}>
            <img
              src={elem.flags?.svg}
              alt={`${elem.name?.official} flag`}
              style={{ height: "200px", objectFit: "cover" }}
              className="mb-3 "
            />
            <p className="mb-2">
              <strong>CountryName: </strong>
              {elem.name?.official}
            </p>
            <p className="mb-2">
              <strong>Population: </strong>
              {elem.population?.toLocaleString()}
            </p>
            <p className="mb-5">
              <strong>Capital: </strong>
              {elem.capital}
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default CountryDetails;
