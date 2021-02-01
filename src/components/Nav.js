import { useState ,useEffect } from 'react'
import styles from '../../styles/Nav.module.css'

export default function Nav() {
    const [show, handleShow] = useState(false)

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true)
            } else {
                handleShow(false)                
            }
        })
        return () => {
            window.removeEventListener("scroll")
        }
    }, [])

    return(
        <div className={`${styles.nav} ${show ? styles.nav_black : ''}`}>
            <img className={styles.nav_logo} src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="Netflix Logo"/>
            <img className={styles.nav_avatar} src="https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0_rw_600.png?h=8030f4d5734548795c22da59ca72e3e1" alt="Profile"/>
        </div>
    )   
}