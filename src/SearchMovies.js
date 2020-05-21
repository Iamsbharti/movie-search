import React from "react";
function SearchMovies() {
  return (
    <div>
      <form className="form">
        <label htmlFor="query" className="label" />
        <input
          type="text"
          className="query"
          name="query"
          placeholder="movie name"
        />
        <button className="button">Submit</button>
      </form>
    </div>
  );
}
export default SearchMovies;
