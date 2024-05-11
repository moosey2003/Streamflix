
"use client";
import React from "react";
import { Card } from "flowbite-react";
import image from '../assets/onepiece.avif'
import { useEffect, useState } from "react";
import Navigation from "./navigation/Navigation";
import Footers from "./Footer";
// import { movies } from "./data";

const AllTv = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5002/api/getTvshows");
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
          {/* <h1>Movies</h1> */}
          <div className="flex ">
          {movies.map((movie, index) => (
            <Card
              key={index}
              className="max-w-sm flex justify-between mx-8 bg-gray-900"
              imgAlt="Meaningful alt text for an image that is not purely decorative"
              imgSrc={image}
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
              
  
              <button className="bg-blue-400 rounded-lg w-32 h-10">
                Add to Favorite
              </button>
              </div>
              
            </Card>
          ))}
        </div>
      </div>  
  
      <Footers/>
       </div>  
   
  );
}
export default AllTv
