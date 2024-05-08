import { useState } from 'react';
import onepiece from '../../assets/onepiece.avif'
const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow w-screen">
      <div className="  sm:px-6 lg:px-8">
        <div className="flex  justify-between h-16">
        <div className="flex-shrink-0 flex items-center">
              <img className="block lg:hidden h-8 w-auto" src="/favicon.svg" alt="Flowbite React Logo" />
              <img className="hidden lg:block h-8 w-auto" src="/favicon.svg" alt="Flowbite React Logo" />
            </div>
          <div className="flex">
            
            <div className="hidden sm:-my-px sm:ml-6 sm:flex">
              <a href="#" className="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Home
              </a>
              <a href="/movie" className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Movies
              </a>
              <a href="#" className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                TV Shows
              </a>
              <a href="#" className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Favorite lists
              </a>
              <a href="#" className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Subscription
              </a>
              <a href="#" className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                About us
              </a>
              <a href="/contact" className="ml-8 inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium text-gray-500 hover:text-gray-700 hover:border-gray-300">
                Contact us
              </a>
            </div>
          </div>
         

          <div>
            <div className=' '>
              <img src={onepiece} alt="" className=' w-16 h-16 rounded-[50%]' />
            </div>
          </div>
          <div className=" mr-2 flex items-center sm:hidden">
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
          <a href="#" className="block px-3 py-2 border-b-2 border-transparent text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">Home</a>
          <a href="#" className="block px-3 py-2 border-b-2 border-transparent text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">Movies</a>
          <a href="#" className="block px-3 py-2 border-b-2 border-transparent text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">TV shows</a>
          <a href="#" className="block px-3 py-2 border-b-2 border-transparent text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">Favorite lists</a>
          <a href="#" className="block px-3 py-2 border-b-2 border-transparent text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">Subscription</a>
          <a href="#" className="block px-3 py-2 border-b-2 border-transparent text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">About us</a>
          <a href="#" className="block px-3 py-2 border-b-2 border-transparent text-base font-medium text-gray-500 hover:text-gray-900 hover:bg-gray-50">Contact us</a>
        
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
