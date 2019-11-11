import React, { useState } from "react";
import {
	API_URL,
	API_KEY,
	API_BASE_URL,
	POSTER_SIZE,
	BACKDROP_SIZE,
	IMAGE_BASE_URL,
	IMAGE_POSTER_URL
} from "../config";

// import Components
import HeroImage from "./elements/HeroImage";
import SearchBar from "./elements/SearchBar";
import Grid from "./elements/Grid";
import MovieThumb from "./elements/MovieThumb";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import Spinner from "./elements/Spinner";

// custom hook
import { useHomeFetch } from "./hooks/useHomeFetch";

import NoImage from './images/no_image.jpg';

const Home = () => {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState('');
  
 

	console.log(state);

	if (error) return <div>Somthing went wrong ...</div>;
	if (!state.movies[0]) return <Spinner />;

	return (
		<React.Fragment>
			<HeroImage
				image={`${IMAGE_POSTER_URL}${state.movies[0].backdrop_path}`}
				title={state.heroImage.original_title}
				text={state.heroImage.overview}
			/>
			<SearchBar />
			<Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {state.movies.map(movie =>(
          <MovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
              ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
              : NoImage
            }
            movieId={movie.id}
            movieName={movie.original_title}
            />

        ))
        }

      </Grid>
			<MovieThumb />
			<Spinner />
			<LoadMoreBtn />
		</React.Fragment>
	);
};

export default Home;
