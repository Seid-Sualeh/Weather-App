import React from "react";
import Button from "../../components/button";
import "./search-input.css";

const SearchInput = ({ value, onChange, onSearch, loading }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      <div className="search-input-container">
        <input
          type="text"
          className="search-input"
          placeholder="Enter city name..."
          value={value}
          onChange={(e) => onChange(e.target.value)}
          disabled={loading}
        />
        <Button type="submit" disabled={loading || !value.trim()}>
          {loading ? "Searching..." : "Search"}
        </Button>
      </div>
    </form>
  );
};

export default SearchInput;
