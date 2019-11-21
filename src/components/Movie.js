import React from "react";

// Components
import Navigation from "./elements/Navigation";
import MovieInfo from "./elements/MovieInfo";
import MovieInfoBar from "./elements/MovieinfoBar";
import Actor from "./elements/Actor";
import Grid from "./elements/Grid";
import Spinner from "./elements/Spinner";

import {useMovieFetch} from "./hooks/useMovieFetch";



const Movie = ({movieId}) => {
  const [movie, loading, error] = useMovieFetch(movieId)
  console.log(movie);

  if (error) return <div>something went wrong...</div>;
  if (loading) return <Spinner/>;
  
  return (

  <React.Fragment>
    <Navigation movie={movie.original_title} />
    <MovieInfo/>
    <MovieInfoBar/>
    <Grid>
      <Actor/>
    </Grid>
   </React.Fragment>
  )
};

export default Movie;