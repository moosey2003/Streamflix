import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import image from "../assets/onepiece.avif"

const AllTrending = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5002/api/getTrending");
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
      <h1 className="text-3xl text-white font-medium ml-4 mb-4">Trending Now</h1>
      <div className="flex ">
        {movies.map((movie, index) => (
          <Card className="w-80 bg-gray-900 text-white">
          <img
            src={movie.imageUrl}
            alt="Meaningful alt text for an image that is not purely decorative"
            className="h-48 w-full object-cover" 
          />
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
  );
};

export default AllTrending;
