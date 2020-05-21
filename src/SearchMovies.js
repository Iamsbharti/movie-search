import React from "react";
function SearchMovies() {
  const handleSearch = async e => {
    e.preventDefault();
    console.log("submit call url");
    const query = "jurassic park";

    const url = `https://api.themoviedb.org/3/search/movie?api_key=6d87b9b87b64ffa1b19ed30b41ee5c82&language=en-US&query=${query}&page=1`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSearch}>
        <label htmlFor="query" className="label">
          Movie Name
        </label>
        <input
          type="text"
          className="input"
          name="query"
          placeholder="i.e Jurassic Park"
        />
        <button className="button">Submit</button>
      </form>
    </div>
  );
}
export default SearchMovies;
