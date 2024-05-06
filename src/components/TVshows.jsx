
"use client";

import { Card } from "flowbite-react";
import image from '../assets/onepiece.avif'
import { movies } from "./data";

const TVshows = () => {
    
  return (

    <div className="flex ">
        {/* <h1>TVshows</h1> */}
        {movies.map((data, index) => (
             <Card
             key={index}
             className="max-w-sm flex justify-between"
             imgAlt="Meaningful alt text for an image that is not purely decorative"
             imgSrc={image}
           >
             <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
               {data.name}
             </h5>
             <p className="font-normal text-gray-700 dark:text-gray-400">
                {data.description}
             </p>
           </Card>
        
        ) )}
    </div>
   
  );
}
export default TVshows
