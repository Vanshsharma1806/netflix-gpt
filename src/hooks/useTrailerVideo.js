import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../utils/moviesSlice";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";

const useTrailerVideo = ({id})=>{
    const dispatch = useDispatch();
    

    const getMovieVideos = async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/" + id +"/videos?language=en-US", API_OPTIONS)
        const json = await data.json();


        const filteredData = json?.results.filter((video) =>video.type === "Trailer" )
        
        const trailerVideo = filteredData.length ? filteredData[0] : json[0];
        console.log(trailerVideo);
        dispatch(addTrailerVideo(trailerVideo));

    }
    useEffect(()=>{
        getMovieVideos();
    },[]);
}

export default useTrailerVideo;