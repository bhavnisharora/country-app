import axios from "axios";

const api = axios.create({
  baseURL: "https://restcountries.com/v3.1",
});

//http method

export const getCountryData = () => {
  //   return api.get("/all?fields=name, population, region, capital, flags");
  return api.get("/all");
};

//http get method for the invidual country name

export const getCountryInvData = async (name) => {
  try {
    const response = await api.get(`/name/${name}`);
    if (response.status === 200) {
      return response;
    } else {
      throw new Error(`Unexpected response code: ${response.status}`);
    }
  } catch (error) {
    console.error("Error fetching country data:", error.message);
    throw error;
  }
};
