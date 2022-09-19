import axios from "axios";
import React, { useEffect, useState } from "react";
import ClickCounter from "./components/ClickCounter";
import Movie from "./components/Movie";
import "./App.css";
function App(props) {
  const [loading, setloading] = useState(true);
  const [movies, setMovies] = useState([]);

  async function getMovieAPI() {
    if (0 < movies.length) return;

    const result = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?api_key=584d297b42ed4c50a429f018e6ae5b0d&language=ko&region=KR&page=5"
    );

    console.log(result.data.results);
    setMovies(result.data.results);
    setloading(false);
  }
  useEffect(
    function () {
      getMovieAPI();
    },
    [loading, movies]
  );

  getMovieAPI();
  setTimeout(() => {
    setloading(false);
  }, 5000);

  return (
    <>
      {loading ? (
        <div>로딩중...</div>
      ) : (
        <>
          {movies.map(function (ele) {
            return (
              <Movie
                key={ele.id}
                title={ele.title}
                poster_path={ele.poster_path}
                overview={ele.overview}
                vote_average={ele.vote_average}
                adult={ele.adult}
                original_language={ele.original_language}
                release_date={ele.release_date}
                id={ele.id}
              />
            );
          })}
        </>
      )}
    </>
  );
}
export default App;
