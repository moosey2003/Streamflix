import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import image from "../assets/onepiece.avif"

const Trending = () => {
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
      <div className="flex">
        {movies.map((movie, index) => (
          <Card
            key={index}
            className="max-w-sm flex justify-between mx-8"
            imgAlt="Meaningful alt text for an image that is not purely decorative"
            imgSrc={image}
          >
            <h5 className="text-2xl font-bold tracking-tight text-gray-900">
              {movie.title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {/* {movie.description} */}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Trending;
