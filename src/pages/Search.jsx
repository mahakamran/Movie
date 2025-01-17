import React, { useState } from "react";
import { NavLink } from "react-bootstrap";
import {Link} from 'react-router-dom'

const Search = () => {
  const [result, setResult] = useState([]);
  const [data, setData] = useState("");
  const [error, setError] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch(
        `https://www.omdbapi.com/?i=tt3896198&apikey=38c04994&s=${data}`
      );
      const ans = await res.json();
      if (!ans.Search) {
        setError("No search results found");
        setResult([]);
        return;
      }
      setError("");
      setResult(ans.Search);
    } catch (error) {
      setError("Error fetching data");
      setResult([]);
    }
  };

  const handleChange = (e) => {
    setData(e.target.value);
  };

  return (
    <div className="min-h-screen bg-black">
      <div className="px-4 py-24 flex flex-col sm:flex-row justify-center items-center mt-3 sm:px-96">
        <input
          type="text"
          placeholder="Search movies here"
          className="border-3 ml-5 rounded border-black p-2 placeholder-black w-full sm:w-[500px] h-16 text-2xl mb-4 sm:mb-0"
          onChange={handleChange}
        />
        <button
          onClick={fetchData}
          className="px-4 text-2xl mt-[-20px] rounded py-2 bg-green-700 text-white font-semibold active:scale-75 h-16 sm:ml-5"
        >
          Search
        </button>
      </div>

      {error && (
        <div className="text-red-500  text-2xl text-center mb-4">{error}</div>
      )}

      <div className="flex flex-wrap justify-center bg-black">
        {result.map((elem) => (
          <div
            key={elem.imdbID}
            className="w-full sm:w-[370px] h-[450px]  bg-white  rounded-b-0 rounded-t-2xl m-3"
          >
            <img
              className="w-full h-[370px] rounded-2xl hover:opacity-50 transition duration-300"
              src={elem.Poster}
              alt={elem.Title}
            />
          <Link to={`/${elem.imdbID}`}>
          <button
              className="  px-8 sm:px-11  py-2  bg-emerald-700 text-white text-base sm:text-xl font-semibold active:scale-75 rounded ml-[100px] sm:ml-[100px]  mt-[20px] sm:mt-[20px] transition-transform">    More
            </button>
          </Link>
          
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
