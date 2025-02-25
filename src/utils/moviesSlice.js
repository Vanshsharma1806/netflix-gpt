import { createSlice } from "@reduxjs/toolkit";

 const moviesSlice = createSlice({
    name : "movies",
    initialState:{
        nowPlayingmovies : null,
        trailerVideo: null,
        popularMovies : null,
        topRatedMovies : null,
        upcomingMoives :null,
    },
    reducers:{
        addNowPlayingMovies:(state, action) => {
            state.nowPlayingmovies = action.payload;
        },
        addTrailerVideo:(state, action)=>{
            state.trailerVideo = action.payload;
        },
        addPopularMovies:(state, action)=>{
            state.popularMovies = action.payload;
        },
        addTopRatedMovies: (state, action) =>{
            state.topRatedMovies = action.payload;
        },
        addUpcomingMoives: (state, action) =>{
            state.upcomingMoives = action.payload;
        }
    }

})

export const {addNowPlayingMovies, addTrailerVideo, addPopularMovies, addTopRatedMovies, addUpcomingMoives} = moviesSlice.actions;
export default moviesSlice.reducer;

