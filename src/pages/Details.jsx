import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Details = () => {
  const { imdbID } = useParams(); // Get the imdbID from the URL params
  const navigate = useNavigate(); // Use navigate hook to go back to search page
  const [movieData, setMovieData] = useState(null); // State to store the movie data
  const [error, setError] = useState(null); // State to track errors if any

  // Async function to fetch movie data from OMDB API
  const getInfo = async () => {
    setError(null); // Reset previous errors

    const url = `https://www.omdbapi.com/?apikey=38c04994&i=${imdbID}`;
    const res = await fetch(url);
    const json = await res.json();

    if (json.Response === "False") {
      setError("Movie not found.");
    } else {
      setMovieData(json); // Set movie data if response is valid
    }
  };

  // Automatically fetch movie details on component mount
  useEffect(() => {
    getInfo();
  }, [imdbID]); // Re-run if imdbID changes

  // Error state
  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-black text-white">
        <h1 className="text-4xl">{error}</h1>
      </div>
    );
  }

  // Movie details display
  if (movieData) {
    return (
      <div className="bg-black text-white min-h-screen p-4 sm:p-8">
        <div className="max-w-screen-lg mx-auto">
          <div className="flex flex-col md:flex-row items-center">
          <img
  src={movieData.Poster !== "N/A" ? movieData.Poster : 'https://via.placeholder.com/300x450?text=No+Image+Available'}
  alt={movieData.Title}
  className="w-full mt-5  sm:w-[500px] md:w-[500px] lg:w-[500px] xl:w-[500px] h-[480px] object-cover rounded-lg shadow-lg mb-4 md:mb-0"
/>


            <div className="md:ml-8 mt-4 md:mt-0">
              <h1 className="text-3xl sm:text-4xl font-semibold mb-4">{movieData.Title}</h1>
              <h3 className="text-xl sm:text-2xl font-medium mb-2">{movieData.Year}</h3>
              <h3 className="text-lg sm:text-xl mb-2"><strong>Director:</strong> {movieData.Director}</h3>
              <h3 className="text-lg sm:text-xl mb-2"><strong>Genre:</strong> {movieData.Genre}</h3>
              <h3 className="text-lg sm:text-xl mb-2"><strong>Rating:</strong> {movieData.imdbRating}</h3>
              <p className="text-sm sm:text-base mb-4">{movieData.Plot}</p>

              <div className="flex flex-wrap gap-4">
                <button
                  onClick={() => window.open(`https://www.youtube.com/results?search_query=${movieData.Title}+trailer`, '_blank')}
                  className="px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition duration-300 text-xl"
                >
                  Watch Trailer
                </button>
                {/* Go Back Button */}
                <button
                  onClick={() => navigate('/search')} // Navigate to search page (home page)
                  className="px-8 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition duration-300 text-xl"
                >
                  Go Back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Loading state
  return (
    <div className="flex justify-center items-center h-screen bg-black text-white">
      <p className="text-xl">Loading movie details...</p>
    </div>
  );
};

export default Details;

