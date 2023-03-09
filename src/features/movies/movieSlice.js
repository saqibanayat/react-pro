import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

import movieApi from '../../common/apis/movieApi'
import { APIKey } from '../../common/apis/MovieApiKey'
 

const initialState={
movies:{},
shows:{},
selctMoviesOrShow:{}
}

  //this api is for fetching movies
  export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',async(term)=>{

    const response = await movieApi.get(`?apikey=${APIKey}&s=${term}&type=movie`)
  
   return response.data;


})


  //this api is for fetching Shows
  export const fetchAsyncShows= createAsyncThunk('movies/fetchAsyncShows',async(term)=>{

    const response = await movieApi.get(`?apikey=${APIKey}&s=${term}&type=series`)
  
   return response.data;


})



  //this api is for fetching detail of any movie or show
  export const fetchAsyncMovieOrShowDetail= createAsyncThunk('movies/fetchAsyncMovieOrShowDetail',async(id)=>{

    
    const response = await movieApi.get(`?apikey=${APIKey}&i=${id}&Plot=full`)
  
   return response.data;


})



const movieSlice = createSlice({
    name:'movies',
    initialState,
    reducers:{
        removeSeletecMovieOrShow:(state)=>{
            state.selctMoviesOrShow ={};
        }
    },
    extraReducers:{
        [fetchAsyncMovies.pending]:()=>{
            console.log('pending');
        },
        [fetchAsyncMovies.fulfilled]:(state,{payload})=>{
            console.log('fetch Sucessfully');
        
            return {...state, movies:payload}
        
        },
        [fetchAsyncMovies.rejected]:()=>{
            console.log('rejected');
        },
        [fetchAsyncShows.fulfilled]:(state,{payload})=>{
            console.log('fetch Sucessfully');
        
            return {...state, shows:payload}
        
        },
        [fetchAsyncMovieOrShowDetail.fulfilled]:(state,{payload})=>{
            console.log('fetch Sucessfully');
        
            return {...state, selctMoviesOrShow:payload}
        
        }
    }
    
})
export const {removeSeletecMovieOrShow} = movieSlice.actions;
export const getAllMovies = (state)=> state.movies.movies;
export const getAllShows = (state)=> state.movies.shows;
export const getSelectedMovieOrShow = (state)=> state.movies.selctMoviesOrShow;


export default movieSlice.reducer;