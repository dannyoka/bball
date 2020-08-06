import React, { useState } from "react";

const SearchBar = ({ getQuery }) => {
  const [term, setTerm] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    getQuery(term);
    setTerm("");
  };

  return (
    <div>
      <form className="form group" onSubmit={onSubmit}>
        <label>Search for a player</label>
        <input
          type="text"
          value={term}
          onChange={(e) => {
            setTerm(e.target.value);
          }}
        />
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default SearchBar;
