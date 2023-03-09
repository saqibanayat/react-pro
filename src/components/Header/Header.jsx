import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';
import user from '../../images/user.png'
import './Header.scss'


const Header = () => {

const dispatch = useDispatch();
const [term, setTerm] = useState("")

 const submitHandler=(e)=>{
    
    e.preventDefault();
    if(term==="") return alert('please enter the search items!')
    dispatch(fetchAsyncMovies(term))
    dispatch(fetchAsyncShows(term))
    setTerm("")
 }

    return (
       <div className='header'>
       
            <div className="logo"> <Link to="/"> movie App </Link></div>
           
<div className="search-bar">
    <form onSubmit={submitHandler}>
        <input type="text" value={term} placeholder="Search movies"  onChange={(e)=>{setTerm(e.target.value)}}/>
        <button type='submit'>search</button>
    </form>
</div>
<div className="user-image">
    <img src={user} alt="user" />
</div>

       </div>
    );
};

export default Header;