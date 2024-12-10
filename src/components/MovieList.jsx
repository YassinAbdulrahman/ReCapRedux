import { Pagination, Row } from "react-bootstrap";
import CardMovie from "./CardMovie";
import Pag from "./Pag";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllMovie } from "../rtk/action/movieAction";

function MovieList({ getPage, pageCount }) {
  const [movies, setMovies] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    // getAllMovies();
    dispatch(getAllMovie())
  }, []);

  const dataMovies = useSelector((state) => state.movies);
  

  useEffect(()=>{
    setMovies(dataMovies)
  },[dataMovies])

  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((movie) => {
          return <CardMovie key={movie.id} movie={movie} />;
        })
      ) : (
        <h2>there is no movies !!!</h2>
      )}
      {movies.length >= 1 ? (
        <Pag getPage={getPage} pageCount={pageCount} />
      ) : null}
    </Row>
  );
}

export default MovieList;
