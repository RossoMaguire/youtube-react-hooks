import React, { useState } from "react";

const SearchBar = ({ termSubmit }) => {
  const [term, setTerm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();

    termSubmit(term);
  };

  return (
    <div className="search-bar ui segment">
      <form onSubmit={onFormSubmit} className="ui form">
        <div className="field">
          <label htmlFor="video-search">Video search</label>
          <input
            onChange={(e) => {
              setTerm(e.target.value);
            }}
            name="video-search"
            type="text"
            value={term}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
