import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './pages/Home';
// import AllTVshows from './pages/AllTVshows'
import  Dashboard  from './pages/AdminDashboard';
import  Table from './pages/MovieTable';
import User  from './pages/UserTable';
import AllMovie from "./pages/AllMovie";
import Contact from './pages/Contact';
import Subscription from './pages/Subscription';
import AboutUs from './pages/AboutUs';
import OrderTable from './pages/OrderTable';
import MovieTable from './pages/MovieTable';

import TvShowsTable from './pages/TVshowsTable';
import TrendingTable from './pages/TrendingTable';
import MovieForm from './Model/MovieForm';
import AllTrending from './pages/AllTrending';
import AllTv from './components/AllTv';
import Details from './pages/Details';
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn';
import FavoriteList from './pages/FavoriteList';
import TrendingForm from './Model/TrendingForm';
import TvshowForm from './Model/TvshowForm';


import Play from './pages/Play';
import EditMovie from './Model/EditMovie';
import EditTvshow from './Model/EditTvshow'
import EditTrending from './Model/EditTrending'
import UserTable from './pages/UserTable'
import PaymentMethodSelector from './pages/Payment';
import TrendingDetails from './pages/TrendingDetails';
import TvshowDetails from './pages/TvshowDetails';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="admin" element={<Table />} />
        <Route path="user" element={<User />} />
        <Route path="movie" element={<AllMovie />} />
        <Route path="tvshows" element={<AllTv />} />
        <Route path="trendings" element={<AllTrending />} />
        <Route path="contact" element={<Contact />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="order" element={<OrderTable />} />
        <Route path="movies" element={<MovieTable />} />
        <Route path="tvshow" element={<TvShowsTable />} />
        <Route path="trending" element={<TrendingTable/>} />
        <Route path="movieform" element={<MovieForm/>} />
        <Route path="trendingform" element={<TrendingForm/>} />
        <Route path="tvshowform" element={<TvshowForm/>} />
        <Route path='sign-up' element={<SignUp/>} />
        <Route path='sign-in' element={<SignIn/>} />
        <Route path='payment/:id' element={<PaymentMethodSelector/>} />
        <Route path="/play/:id" element={<Play />} />
        <Route path="/editMovie/:movieId" element={<EditMovie />} />
        <Route path="/editTvshow/:movieId" element={<EditTvshow />} />
        <Route path="/editTrending/:movieId" element={<EditTrending />} />
        <Route path='userTable' element={<UserTable />} />
          <Route path="/details/:id" element={<Details/>} />
          <Route path="/trendingDetails/:id" element={<TrendingDetails/>} />
          <Route path="/tvshowDetails/:id" element={<TvshowDetails/>} />
        <Route path='favoriteList' element={<FavoriteList/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
