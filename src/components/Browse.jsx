import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import { API_OPTIONS } from "../utils/constants";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

    // calling our custom hook
    useNowPlayingMovies();
    usePopularMovies();

    return <div>
        
        <Header />
        <MainContainer />
        <SecondaryContainer />
        {/*
            Main Container
             - VideoBackground
             - VIdeoTitle
            
             SecondaryContainer
             - MovieList * n
               - cards * n
        */ }
    </div>;
};
export default Browse;