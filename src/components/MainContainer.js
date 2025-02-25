import {  useSelector } from "react-redux";
import VideoBackground from "./VideoBackground";
import VideoTitle from "./VideoTitle";

const MainContainer = ()=>{
    
    const movies = useSelector(
        (store)=>store.movies?.nowPlayingmovies,
    );

    
    if(!movies ) return ;
    

    const mainMovie = movies[0];
    const {title, id, overview} = mainMovie;

    return (
        <div>
            <VideoTitle title = {title} overview = {overview} />
            <VideoBackground id = {id} />
        </div>
    )
}
export default MainContainer;