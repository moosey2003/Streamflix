
"use client";

import { Card } from "flowbite-react";
import image from '../assets/onepiece.avif'
import { movies } from "./data";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Movies = () => {
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

    <div className="w-screen mt-4">
      
      <h1 className="text-3xl text-white font-medium ml-4 mb-4">Movies</h1>
      <div className="flex ">
        
      {movies.slice(0, 4).map((movie, index)   => (
        <Link to={`/details/${movie._id}`} key={index} className="z-20">
          <Card
            key={index}
            className="max-w-sm flex justify-between mx-8 bg-gray-900"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={movie.imageUrl}
          >
            <div className="flex items-center justify-between">
            <h5 className="text-2xl font-bold tracking-tight text-white">
              {movie.title}
            </h5>
            <span className="text-white bg-yellow-400 w-16 h-6 rounded-sm text-center ">
              {movie.rating}
            </span>
            </div>
           
            <p className="font-normal w-64 h-24 text-white overflow-hidden text-ellipsis ">
              {movie.description}...
            </p>
            
            <div className="flex justify-end">
            

           
            </div>
            
          </Card>
          </Link>
        ))}
      </div>
    </div>
   
  );
}
export default Movies
