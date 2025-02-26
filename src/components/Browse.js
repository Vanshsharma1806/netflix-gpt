
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import SecondaryContainer from "./SecondaryContainer";
import MainContainer from "./MainContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearchPage from "./GptSearchPage";

const Browse = ()=>{
    

    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();
    const showGptSearchPage = useSelector((store) => store.gpt.showGptSearch);
    
    return (
        <div>
            <Header/>
            {
                showGptSearchPage ? <GptSearchPage/>:
                <>
                    <MainContainer/>
                    <SecondaryContainer/>
                </>
            }
        </div>
    )
}
export default Browse;