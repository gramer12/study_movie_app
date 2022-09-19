import PropTypes from "prop-types"; // ES6

function Movie(props) {
  //{ movieName, actor, genre }
  return (
    <>
      <div>영화정보</div>
      <div> 주연배우 : {props.movieName}</div>
      <div> 배우 : {props.actor}</div>
      <div> 장르 : {props.genre}</div>
      <div>
        상영 시간:{" "}
        {props.time
          ? props.time
              .filter((ele) => {
                return typeof ele === "string" ? true : false;
              })
              .join(" ")
          : "상영안함"}
      </div>
      <div> 가격 : {props.price ? props.price + 500 : 0}</div>

      <hr></hr>
    </>
  );
}
Movie.propTypes = {
  movieName: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  actor: PropTypes.string.isRequired,
  price: PropTypes.number,
  time: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
      PropTypes.objectOf(PropTypes.string),
    ])
  ),
};

export default Movie;
