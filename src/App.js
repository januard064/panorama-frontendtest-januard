
import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import dotenv from 'dotenv'

import LandingPage from './pages/LandingPage';
import MovieDetail from './pages/MovieDetail';
// dotenv.config();

function App() {


  return (
    <Router>
      <Routes>
        <Route path='*' element={<LandingPage />} />
        <Route path={`movie/:movie_id`} element={<MovieDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
