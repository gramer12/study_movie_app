import axios from "axios";
import React, { useEffect, useState } from "react";
import Movie from "./Movie";
import "./Movies.css";
function Movies(props) {
  console.log(props);
  const [loading, setloading] = useState(true);
  const [movies, setMovies] = useState([]);

  async function getMovieAPI() {
    console.log("함수가호출됨");
    if (!props.apiPath) return;
    console.log("ㅁㅈㄱ함수가호출됨");
    const result = await axios.get(
      `https://api.themoviedb.org/3/movie/${props.apiPath}?api_key=584d297b42ed4c50a429f018e6ae5b0d&region=KR&language=ko`
    );

    setMovies(result.data.results);
    setloading(false);
  }
  useEffect(
    function () {
      getMovieAPI();
    },
    [props.apiPath]
  );

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
export default Movies;
