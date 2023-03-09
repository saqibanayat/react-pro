import React from "react";
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom'

import "./App.scss";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import MovieDetail from "./components/MovieDetails/MovieDetail";
import PageNotFound from "./components/PageNotFound/PageNotFound";
function App() {
  return (
    <div className="app">
      <Router>
<Header/>
<div className="container">
<Routes>
<Route exact path="/" element={<Home/>}/>
<Route path="/movie/:imdbID" element={<MovieDetail/>}/>
<Route  element={<PageNotFound/>}/>

</Routes>
</div>

<Footer/>
      </Router>
   
    </div>
  );
}

export default App;
