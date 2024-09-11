import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RandomMovies = () => {
    const [movies, setMovies] = useState([]);

    const truncateTitle = (title) => {
        const maxLength = 20; // Adjust the maximum length as needed
        return title.length > maxLength ? title.substring(0, maxLength) + "..." : title;
    };

    useEffect(() => {
        const fetchRandomMovies = async () => {
            try {
                const response = await axios.get('https://api.themoviedb.org/3/discover/movie', {
                    params: {
                        api_key: process.env.REACT_APP_MOVIEAPI, // Replace with your actual API key
                        language: 'en-US',
                        page: Math.floor(Math.random() * 10) + 1, // Randomize the page number
                        with_genres: 10751
                    },
                });
                setMovies(response.data.results.slice(0, 3));
            } catch (error) {
                console.error('Error fetching movies:', error);
            }
        };

        fetchRandomMovies();
    }, []);

    return (
        <div className="movie-container">
            {movies.map((movie) => (
                <div key={movie.id} className="movie-card">
                    <a href={`https://www.themoviedb.org/movie/${movie.id}`} target="_blank">
                        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title}
                        />
                    </a>
                    <p>{truncateTitle(movie.title)}</p>
                </div>
            ))}
        </div>
    );
};

export default RandomMovies;