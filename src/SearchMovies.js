import React, { useState } from "react";
import MovieCard from "./MovieCard";
function SearchMovies() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const handleSearch = async e => {
    e.preventDefault();
    console.log("submit call url");
    const url = `https://api.themoviedb.org/3/search/movie?api_key=6d87b9b87b64ffa1b19ed30b41ee5c82&language=en-US&query=${query}&page=1`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data.results);
      setMovies(data.results);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <>
      <form className="form" onSubmit={handleSearch}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          type="text"
          className="input"
          name="query"
          placeholder="i.e Jurassic Park"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
        <button className="button">Submit</button>
      </form>
      <MovieCard movies={movies} />
    </>
  );
}
export default SearchMovies;
