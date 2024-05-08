import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
import Trending from './components/Trending';
import TVshows from './components/TVshows';
import  Dashboard  from './pages/Admin_dashboard';
import  Table from './pages/Table';
import User  from './pages/User_table';
import Movie from "./pages/Movie";
import Contact from './pages/Contact';
import Subscription from './pages/Subscription';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="trending" element={<Trending />} />
        <Route path="tvshows" element={<TVshows />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="admin" element={<Table />} />
        <Route path="user" element={<User />} />
        <Route path="movie" element={<Movie />} />
        <Route path="contact" element={<Contact />} />
        <Route path="subscription" element={<Subscription />} />
      </Routes>
      
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
