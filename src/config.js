const api_key = '85c47872616dcf73cfede9cd05b271af' 

export const requests = {
    fetchNetflixOriginals: `/discover/tv?api_key=${api_key}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
    fetchDocumentaryMovies: `/discover/movie?api_key=${api_key}&with_genres=99`
}

export const baseURL = "https://api.themoviedb.org/3"

export const imageBaseURL = "https://image.tmdb.org/t/p/original/"