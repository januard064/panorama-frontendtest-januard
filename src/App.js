import { createContext, useContext, useState, useEffect } from 'react';

import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Header from './components/header/header';
import Footer from './components/footer/footer';
import LandingPage from './pages/LandingPage';
import MovieDetail from './pages/MovieDetail';

export const MovieContext = createContext({})

function App() {

  const [searchMovie, setSearchMovie] = useState([])
  const [searchText, setSearchText] = useState('')



  const MovieContextValue = {
    searchMovie,
    setSearchMovie,
    searchText, 
    setSearchText
  }


  return (
    <MovieContext.Provider value={MovieContextValue}>
      <div style={{ position: 'relative' }}>
        <Header />
        <Router>
          <Routes>
            <Route path='*' element={<LandingPage />} />
            <Route path={`/movie/:movie_id`} element={<MovieDetail />} />
          </Routes>
        </Router>
        <Footer />
      </div>
    </MovieContext.Provider>

  );
}

export default App;
