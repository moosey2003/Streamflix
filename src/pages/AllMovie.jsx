
"use client";

import { Card } from "flowbite-react";
import image from '../assets/onepiece.avif'
import { movies } from "../components/data";
import { useEffect, useState } from "react";
import Navigation from "../components/navigation/Navigation";
import Footers from "../components/Footer";
import { Link } from "react-router-dom";

const Movie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5002/api/getMovies");
        if (response.ok) {
          const data = await response.json();
          setMovies(data);
          console.log('success');
        } else {
          console.log('fail');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
    
  return (
<div className="w-screen  bg-black">
  <Navigation />
  <div className="flex mt-4 mb-4">
        <div className="flex flex-wrap justify-center">
          {movies.map((movie, index) => (
            <Link to={`/movie/${movie._id}`} key={index} className="mx-4 mb-4">
              <Card className="w-80 bg-gray-900 text-white">
                <img
                  src={movie.imageUrl}
                  alt="Meaningful alt text for an image that is not purely decorative"
                  className="h-48 w-full object-cover" 
                />
                <div className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <h5 className="text-xl font-bold tracking-tight">
                      {movie.title}
                    </h5>
                    <span className="bg-yellow-400 text-black text-sm font-semibold rounded-sm px-2 py-1">
                      {movie.rating}
                    </span>
                  </div>
                  <p className="font-normal h-24 text-ellipsis overflow-hidden">
                    {movie.description}...
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>

    <Footers/>
     </div>   
   
  );
}
export default Movie
