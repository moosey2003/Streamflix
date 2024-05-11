
"use client";

import { Table } from "flowbite-react";
import { useEffect, useState } from "react";

const TrendingTable = () => {
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
    <div className="overflow-x-auto">
      <Table>
        <Table.Head>
        <Table.HeadCell>Movie Title</Table.HeadCell>
          <Table.HeadCell>Genre</Table.HeadCell>
          <Table.HeadCell>Released Date</Table.HeadCell>
          <Table.HeadCell>Duration</Table.HeadCell>
          <Table.HeadCell>Cast</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>Rating</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
            {movies.map((data, index) => (
   <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
   <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
    {data.title}
   </Table.Cell>
   <Table.Cell>{data.genre}</Table.Cell>
   <Table.Cell>{data.release_date}</Table.Cell>
   <Table.Cell>{data.duration}</Table.Cell>
   <Table.Cell>{data.cast}</Table.Cell>
   <Table.Cell>{data.description}</Table.Cell>
   <Table.Cell>{data.rating}</Table.Cell>
   <Table.Cell>
     <a href="#" className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
       Edit
     </a>
   </Table.Cell>
 </Table.Row>
            ) )}
       
         
        </Table.Body>
      </Table>
    </div>
  );
}

export default TrendingTable