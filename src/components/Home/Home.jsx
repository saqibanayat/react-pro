import React, { useEffect } from 'react';
import MovieListing from '../MovieListing/MovieListing';

import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
const Home = () => {

    const dispatch = useDispatch();
  const movieText ='all'
  const showText = 'friends'

    useEffect(() => {
  
dispatch(fetchAsyncMovies(movieText))
dispatch(fetchAsyncShows(showText))
  

    }, [dispatch])


    return (
        <>

            <div className='banner-img'></div>
            <MovieListing />

        </>

    );
};

export default Home;