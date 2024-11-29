import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function TodoCountry() {
  const [countries, setCountries] = useState([]);
  const [newCountry, setNewCountry] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [editingCountry, setEditingCountry] = useState("");

  const addCountry = () => {
    if (newCountry.trim() !== "") {
      setCountries([...countries, newCountry.trim()]);
      setNewCountry("");
    }
  };

  const deleteCountry = (index) => {
    const updatedCountries = countries.filter((_, i) => i !== index);
    setCountries(updatedCountries);
  };

  const startEditing = (index) => {
    setEditingIndex(index);
    setEditingCountry(countries[index]);
  };

  const saveEdit = () => {
    if (editingCountry.trim() !== "") {
      const updatedCountries = [...countries];
      updatedCountries[editingIndex] = editingCountry.trim();
      setCountries(updatedCountries);
      setEditingIndex(null);
      setEditingCountry("");
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Country To-Do App</h1>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add a country"
          value={newCountry}
          onChange={(e) => setNewCountry(e.target.value)}
        />
        <button className="btn btn-primary" onClick={addCountry}>
          Add
        </button>
      </div>
      <ul className="list-group">
        {countries.map((country, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            {editingIndex === index ? (
              <input
                type="text"
                className="form-control me-2"
                value={editingCountry}
                onChange={(e) => setEditingCountry(e.target.value)}
              />
            ) : (
              <span>{country}</span>
            )}
            <div>
              {editingIndex === index ? (
                <>
                  <button
                    className="btn btn-success btn-sm me-2"
                    onClick={saveEdit}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-secondary btn-sm"
                    onClick={() => setEditingIndex(null)}
                  >
                    Cancel
                  </button>
                </>
              ) : (
                <>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => startEditing(index)}
                  >
                    Edit
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => deleteCountry(index)}
                  >
                    Delete
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoCountry;
