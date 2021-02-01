import { useState , useEffect } from 'react'
import { baseURL, imageBaseURL } from '../config'
import fetch from 'isomorphic-unfetch'
import styles from '../../styles/Row.module.css'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'

export default function Row({ title, fetchURL, isLargeRow }) {
    const [movies, setMovies] = useState([])
    const [trailerURL, setTrailerURL] = useState('')

    useEffect(() => {
        async function fetchUrl () {
            const request = await (await fetch(`${baseURL}${fetchURL}`)).json()
            setMovies(request.results);
        }

        fetchUrl()
    }, [fetchURL])

    const opts = {
        height: "450",
        width: "100%",
        playVars: {
            autoPlay: 1,
        },
    }

    const handleClick = (movie) => {
        if (trailerURL) {
            setTrailerURL('')
        } else {
            movieTrailer(movie?.name || movie?.title || movie?.orginal_name || '').then((url) => {
                const urlParams = new URLSearchParams(new URL(url).search)
                setTrailerURL(urlParams.get("v"))
            }).catch((err) => console.log(err))
        }
    }

    return (
        <div className={styles.row}>
            <h2>{title}</h2>
            <div className={styles.row_posters}>
                {movies.map(movie => (
                    <img 
                    key={movie.id} 
                    onClick={() => handleClick(movie)} 
                    className={`${styles.row_poster} ${isLargeRow ? styles.row_posterLarge : ''}`} 
                    src={`${imageBaseURL}${isLargeRow? movie.poster_path : movie.backdrop_path}`} 
                    alt={movie.name}
                    />
                ))}
            </div>
            {trailerURL && <YouTube opts={opts} videoId={trailerURL}/>}
        </div>
    )
}