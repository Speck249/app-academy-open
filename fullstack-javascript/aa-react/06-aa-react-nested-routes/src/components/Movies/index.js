import { Switch, Route, NavLink } from "react-router-dom";
import MovieDetails from "../MovieDetails";

function Movies({ movies }) {
  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <nav>
        <ul>
          {movies.map((movie) => {
            return (
              <NavLink
                key={movie.id}
                activeClassName="purple"
                activeStyle={{
                  fontWeight: "bold",
                  border: "none",
                  margin: "10px",
                }}
                to={`/movies/${movie.id}`}
              >
                {movie.title}
              </NavLink>
            );
          })}
        </ul>
      </nav>

      <Switch>
        <Route path="/movies/:movieId">
          <MovieDetails movies={movies} />;
        </Route>
      </Switch>
    </div>
  );
}

export default Movies;
