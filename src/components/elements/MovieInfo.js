import React from "react";

import Noimage from "../images/no_image.jpg";
import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";

import movieThumb from "./MovieThumb";

import { StyledMovieInfo } from "../styles/StyledMovieInfo";
import Movie from "../Movie";
import MovieThumb from "./MovieThumb";

const MovieInfo = ({ movie }) => (
	<StyledMovieInfo backdrop={movie.backdrop_path}>
		<div className="movieinfo-content">
			<div className="movieinfo-thumb">
				<MovieThumb
					image={
						movie.poster_path
							? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
							: Noimage
					}
					clickable={false}
				/>
			</div>
			<div className="movieinfo-text">
				<h1>{movie.title}</h1>
				<h3>PlOT</h3>
				<p>{movie.overview}</p>

				<div className="rating-director">
					<div>
						<h3>IMDB RATING</h3>
						<div className="score">{movie.vote_average}</div>
					</div>
					<div className="director">
						<h3>DIRECTOR{movie.director > 1 ? "s" : ""}</h3>
						{movie.directors.map(element => (
							<p key={element.credit_id}>{element.name}</p>
						))}
					</div>
				</div>
			</div>
		</div>
	</StyledMovieInfo>
);

export default MovieInfo;
