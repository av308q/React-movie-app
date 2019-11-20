import React from "react";

// Components
import Navigation from "./elements/Navigation";
import MovieInfo from "./elements/MovieInfo";
import MovieInfoBar from "./elements/MovieinfoBar";
import Actor from "./elements/Actor";
import Grid from "./elements/Grid";
import Spinner from "./elements/Spinner";

const Movie = ({movieId}) => (
  <React.Fragment>
    <Navigation/>
    <MovieInfo/>
    <MovieInfoBar/>
    <Grid>
      <Actor/>
    </Grid>
    <Spinner/>

  </React.Fragment>
);

export default Movie;