
"use client";

import { Card } from "flowbite-react";
import image from '../assets/onepiece.avif'
import { useEffect, useState } from "react";
// import { movies } from "./data";

const TVshows = () => {

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
    <div className="w-screen mt-4 mb-16"> 
              <h1 className="text-3xl text-white font-medium ml-4 mb-4">TV Shows</h1>
       <div className="flex ">
   
        {movies.map((data, index) => (
             <Card
             key={index}
             className="max-w-sm flex justify-between mx-8"
             imgAlt="Meaningful alt text for an image that is not purely decorative"
             imgSrc={image}
           >
             <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               {data.title}
             </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
                {/* {data.description} */}
             </p>
           </Card>
        
        ) )}
    </div>
   
    </div>
   
  );
}
export default TVshows
