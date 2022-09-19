import PropTypes from "prop-types";
import "./Movie.css";

function Movie(props) {
  return (
    <div className="movie_data">
      <div className="movie_poster">
        <div className="movie_adult">{!props.adult ? "19" : null}</div>
        <img
          className="movie_poster_img"
          src={`https://image.tmdb.org/t/p/w500${props.poster_path}`}
          with={150}
        ></img>
      </div>

      <h3 className="movie_title">제목 : {props.title}</h3>
      {/* <div className="movie_poster">{props.poster_path}</div> */}
      <div className="movie_overview">
        줄거리 : {props.overview.slice(0, 100)}...
      </div>
      <div className="movie_vote">
        평점 : {"⭐".repeat(Math.floor(props.vote_average))}
      </div>

      <div className="movie_lang">
        단어 : {props.original_language.toUpperCase()}
      </div>
      <div className="movie_date movie_info">
        업데이트 날자 : {props.release_date}
      </div>
      <div className="Movie_id movie_info">영화 ID : {props.id}</div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  adult: PropTypes.bool.isRequired,
  original_language: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
};

export default Movie;
