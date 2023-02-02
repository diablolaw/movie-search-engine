import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import "./MovieInfoPage.css";

const MovieInfoPage = ({ getMovieData, movie }) => {
  let params = useParams();
  const movieTitle = params.movieTitle;

  useEffect(() => {
    getMovieData(movieTitle);
  }, []);

  const MovieInfo = ({ name, value }) => (
    <div className={`movie__${name}`}>
      <span className="info__head">
        {name.replace(/\b\w/g, (l) => l.toUpperCase())}
      </span>
      {value}
    </div>
  );

  return (
    <Container>
      <Row className="mt-2">
        <Col>
          <h3>Search Result</h3>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <img src={`${movie?.Poster}`} alt="" />
        </Col>

        <Col>
          <div className="movie">
            <h2 className="movie__title">{`${movie?.Title}`}</h2>

            <span className="movie__description">{`${movie?.Plot}`}</span>

            <div className="movie__infos">
              <MovieInfo name="director" value={`${movie?.Director}`} />
              <MovieInfo name="year" value={`${movie?.Year}`} />
              <MovieInfo name="cast" value={`${movie?.Actors}`} />
              <MovieInfo name="rating" value={`${movie?.Rated}`} />
              <MovieInfo name="country" value={`${movie?.Country}`} />
              <MovieInfo name="awards" value={`${movie?.Awards}`} />
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};

export default MovieInfoPage;
