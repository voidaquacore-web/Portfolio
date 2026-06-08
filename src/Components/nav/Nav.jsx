import logo from "../../assets/Logo.png"
import styles from "./nav.module.css"

function Nav({color, status}) {

    return (
        <nav className={styles.navEl}>
            <a href="https://google.com">
                <img className={styles.logoImg} src={logo} alt="CodeByKanishk" />
            </a>
            <ul className={styles.ulEl}>
                <a className={styles.navLink} href="#"><li>Home</li></a>
                <a className={styles.navLink} href="#"><li>About me</li></a>
                <a className={styles.navLink} href="#"><li>Resume</li></a>
            </ul>
            <div className={styles.status}>
                 <span className={styles.dot}
                      style={{"--dot-color" : color}}></span>
                 <p>{status}</p>
            </div>
        </nav>
    )

}

export default Nav