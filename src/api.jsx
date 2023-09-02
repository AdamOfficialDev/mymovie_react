import axios from 'axios'

const getURL = 'https://api.themoviedb.org/3'
const apiKey = '4787a2d15b54c8bfc23008da84dd0c13'

export const imgURL = 'https://image.tmdb.org/t/p/w500'

export const getMovieList = async () => {
    const movie = await axios.get(`${getURL}/movie/popular?api_key=${apiKey}`)
    return movie.data.results
}

export const searcMovie = async (q) => {
    const search = await axios.get(`${getURL}/search/movie?query=${q}&api_key=${apiKey}`)
    return search.data
}