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
	const [
		{ 
		state:{movies, currentPage, totalPages, heroImage}, 
		loading, 
		error, 
	
	}, 
	fetchMovies] = useHomeFetch();
	const [searchTerm, setSearchTerm] = useState('');
	
	const  loadMoreMovies = () => {
		const searchEndpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${currentPage + 1}`;
		const PopularEndpoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=${currentPage + 1}`;

		const endpoint = searchTerm ? searchEndpoint : PopularEndpoint;

		fetchMovies(endpoint);
	}
  
 

	

	if (error) return <div>Somthing went wrong ...</div>;
	if (!movies[0]) return <Spinner />;

	return (
		<React.Fragment>
			<HeroImage
				image={`${IMAGE_POSTER_URL}${movies[0].backdrop_path}`}
				title={heroImage.original_title}
				text={heroImage.overview}
			/>
			<SearchBar />
			<Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {movies.map(movie =>(
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
			
			{loading && <Spinner />}
			{currentPage < totalPages && !loading && (
			<LoadMoreBtn Text="Load more" callback={loadMoreMovies}/>
			)}
		</React.Fragment>
	);
};

export default Home;
