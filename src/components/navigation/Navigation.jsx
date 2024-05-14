'use client'
import { useState } from 'react';
import axios from 'axios';
import onepiece from '../../assets/onepiece.avif';
import streamflix from '../../assets/stream.jpg';
import { Avatar, Card, Dropdown } from "flowbite-react";
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleSearchChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSearch = async (event) => {
    if (event.key === 'Enter') {
      try {
        const response = await axios.get('http://127.0.0.1:5002/api/search', {
          params: { query }
        });
        setSearchResults(response.data);
        setIsModalOpen(true); 
      } catch (error) {
        console.error('Error searching for movies:', error);
      }
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const email = sessionStorage.getItem('email');

  return (
    <nav className="bg-black shadow w-screen">
      <div className="sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img className="block lg:hidden h-16 w-auto" src={streamflix} alt="Streamflix React Logo" />
            <img className="hidden lg:block h-16 w-auto" src={streamflix} alt="Streamflix React Logo" />
          </div>
          <div className="flex">
            <div className="hidden sm:-my-px sm:ml-6 sm:flex">
              <a href="/" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-white hover:border-white">
                Home
              </a>
              <a href="/movie" className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-white hover:border-white">
                Movies
              </a>
              <a href="/tvshows" className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-white hover:border-white">
                TV Shows
              </a>
              <a href="/favoriteList" className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-white hover:border-white">
                Favorite lists
              </a>
              <a href="/subscription" className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-white hover:border-white">
                Subscriptions
              </a>
              <a href="/aboutus" className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-white hover:border-white">
                About us
              </a>
              <a href="/contact" className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-white hover:border-white">
                Contact us
              </a>
            </div>
          </div>
          <div>
            <div className="h-16 flex md:order-2 items-center">
              <button type="button" className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                </svg>
                <span className="sr-only">Search</span>
              </button>
              <div className="relative hidden md:block">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                  </svg>
                  <span className="sr-only">Search icon</span>
                </div>
                <input
                  type="text"
                  id="search-navbar"
                  className="block w-full p-2 ps-10 text-sm text-white border bg-black border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search..."
                  value={query}
                  onChange={handleSearchChange}
                  onKeyDown={handleSearch}
                />
              </div>
              <div className="ml-4">
                <Dropdown
                  arrowIcon={false}
                  inline
                  label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded />}
                >
                  <Dropdown.Header>
                    <span className="block truncate text-sm font-medium">{email}</span>
                  </Dropdown.Header>
                  <Dropdown.Item>
                    <Link to="/sign-out" className="z-50">
                      Sign out
                    </Link>
                  </Dropdown.Item>
                </Dropdown>
              </div>
            </div>
          </div>
          <div className="mr-2 flex items-center sm:hidden">
            <button onClick={toggleMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500">
              <svg className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
              <svg className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="pt-2 pb-3 space-y-1">
          <a href="/" className="block px-3 py-2 border-b-2 border-transparent text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">Home</a>
          <a href="/movie" className="block px-3 py-2 border-b-2 border-transparent text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">Movies</a>
          <a href="/tvshows" className="block px-3 py-2 border-b-2 border-transparent text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">TV shows</a>
          <a href="/favoriteList" className="block px-3 py-2 border-b-2 border-transparent text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">Favorite lists</a>
          <a href="/subscription" className="block px-3 py-2 border-b-2 border-transparent text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">Subscription</a>
          <a href="/aboutus" className="block px-3 py-2 border-b-2 border-transparent text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">About us</a>
          <a href="/contact" className="block px-3 py-2 border-b-2 border-transparent text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">Contact us</a>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Search Results"
        className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-20"
        overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center"
      >
        <h2 className="text-xl font-bold mb-4">Search Results</h2>
        <button onClick={closeModal} className="text-red-500 font-bold mb-4">Close</button>
        <div>
          {searchResults.length > 0 ? (
            searchResults.map((movie, index) => (
              <div className="mb-4">
              <Link to={`/details/${movie._id}`} key={index} className="mx-4 mb-4">
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
              
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      </Modal>
    </nav>
  );
};

export default Navigation;
