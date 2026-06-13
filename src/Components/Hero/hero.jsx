import styles from "./hero.module.css"
import art from "../../assets/art.webp"


function Hero() {
    return (
        <div className={styles.hero}>
             
            <div className={styles.heading}>      
                <h1 className={styles.role}>AI <span className={styles.blue}>
                    W</span>EB DEVELOPER </h1>
                <h1 className={styles.name}>KA<span className={styles.blue}>
                    N</span>ISHK <br/> <span className={styles.blue}>N</span>ARWARIYA</h1>
            </div>
             <img className={styles.art} src={art} alt="img"/>
        </div>
    )
}

export default Hero