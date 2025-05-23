import axios from 'axios';

const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "4aa6604ae17173a6ba10c4692462a190";
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';


const getPopularVideo = () => {
    return axios.get(`${movieBaseUrl}/movie/popular?api_key=${api_key}`);
};

const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id);

export default {
    getPopularVideo,
    getMovieByGenreId
};
