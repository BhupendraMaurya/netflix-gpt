import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { API_OPTIONS } from "../utils/constants";
import Header from "./Header";

const Browse = () => {

    // calling our custom hook
    useNowPlayingMovies();

    return <div>
        
        <Header />
    </div>;
};
export default Browse;