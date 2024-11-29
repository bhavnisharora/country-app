import React from "react";

const SearchFilter = ({ search, setSearch, filter, setFilter }) => {
  const handleInputChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleSelectChange = (event) => {
    event.preventDefault();
    setFilter(event.target.value);
  };

  return (
    <div className="d-flex flex-wrap justify-content-between align-items-center mb-4">
      <input
        type="text"
        placeholder="Search by country name"
        value={search}
        onChange={handleInputChange}
        className="form-control w-50 mb-2 mb-md-0"
        style={{ maxWidth: "400px" }}
      />
      <select
        name="region-filter"
        id="region-filter"
        value={filter}
        onChange={handleSelectChange}
        className="form-select w-25"
        style={{ maxWidth: "200px" }}
      >
        <option value="all">All</option>
        <option value="africa">Africa</option>
        <option value="americas">Americas</option>
        <option value="asia">Asia</option>
        <option value="europe">Europe</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
};

export default SearchFilter;
