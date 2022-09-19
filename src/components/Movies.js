import React from "react";
import Movie from "./Movie";

const movies = [
  {
    id: 1,
    영화명: "탑건",
    주연배우: "탐크루즈",
    장르: "비행",
    상영시간: [
      "10:00",
      165165465468,
      { ad: "asdasd" },
      "12:00",
      "18:00",
      "23:00",
    ],
    티켓가격: 15000,
  },
  {
    id: 2,
    영화명: "느와르",
    주연배우: "황정민",
    장르: "누아르",
    티켓가격: 18000,
  },
  {
    id: 3,
    영화명: "수리남",
    주연배우: "황정민",
    장르: "마약",
    //티켓가격: 19000,
  },
];

function Movies() {
  return (
    <>
      <h1>김진수-영화앱</h1>
      {movies.map((movie) => {
        return (
          <Movie
            key={movie.id}
            movieName={movie.영화명}
            actor={movie.주연배우}
            genre={movie.장르}
            time={movie.상영시간}
            price={movie.티켓가격}
          />
        );
      })}

      <Movie
        //key={8288}
        movieName={"movie.영화명"}
        actor={"dkdl"}
        genre={"드러머"}
        time={[]}
        price={5000}
      />
      <Movie
        movieName="doasjio"
        actor={"dkdl"}
        genre={"드러머"}
        time={[]}
        price={5000}
      />
    </>
  );
}

export default Movies;
