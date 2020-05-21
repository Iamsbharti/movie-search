import React from "react";
import "./styles.css";
import SearchMovies from "./SearchMovies";

export default function App() {
  return (
    <div className="Container">
      <h1 className="title">Movie Search</h1>
      <SearchMovies />
    </div>
  );
}
