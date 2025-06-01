import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { API_OPTIONS } from "../utils/constants";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {

    // calling our custom hook
    useNowPlayingMovies();

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