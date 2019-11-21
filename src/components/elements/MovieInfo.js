import React from "react";

import Noimage from "../images/no_image.jpg";
import {IMAGE_BASE_URL, POSTER_SIZE} from "../..config";

import movieThumb from "./MovieThumb";

import {StyleMovieInfo} from "../styles/StyledMovieInfo";
import Movie from "../Movie";
import MovieThumb from "./MovieThumb";


const MovieInfo = ({movie}) => (
  <StyleMovieInfo backdrop={movie.backdrop_path}>
       <div className="movieinfo-content">
       <div className="movieinfo-thumb">
           <MovieThumb
           image={
             movieThumb.poster_path
             ?`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
             : Noimage
           }
           clickable={false}
           />
         </div>
         </div>  

  </StyleMovieInfo>
);

export default MovieInfo;