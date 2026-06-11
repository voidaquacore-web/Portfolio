import styles from "./About.module.css"

function About() {
   return(
     <div className={styles.aboutSec}>
        <h2 className={styles.title}>About <span className={styles.dot}>.</span></h2>
     </div>
   )
}

export default About