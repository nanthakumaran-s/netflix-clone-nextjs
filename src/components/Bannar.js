import { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'
import { baseURL, imageBaseURL } from '../config'
import styles from '../../styles/Banner.module.css'

const Bannar = ({ fetchURL }) => {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        async function fetchData(){
            const request = await (await fetch(`${baseURL}${fetchURL}`)).json()
            setMovie(request.results[Math.floor(Math.random() * request.results.length - 1)]);
        }

        fetchData()
    }, [fetchURL])

    function truncate(str, n){
        return str?.length > n ? str.substr(0, n - 1) + "..." : str
    }

    return (
        <header style={{
            backgroundSize: "cover",
            backgroundImage: `url(${imageBaseURL}${movie?.backdrop_path})`,
            backgroundPosition: "center center",
        }} className={styles.banner}>
            <div className={styles.banner_contents}>
                <h1 className={styles.banner_title}>{movie?.name || movie?.title || movie?.orginal_name}</h1>
                <div className={styles.banner_btnContainer}>
                    <button className={styles.banner_button}>Play</button>
                    <button className={styles.banner_button}>My List</button>
                </div>
                <h1 className={styles.banner_description}>
                    {truncate(movie?.overview, 150)}
                </h1>
            </div>
        </header>
    )
}

export default Bannar
