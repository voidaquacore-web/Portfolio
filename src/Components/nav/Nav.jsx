import { useState } from "react"
import logo from "../../assets/Logo.png"
import styles from "./nav.module.css"

function Nav({ color, status }) {
    const [open, setOpen] = useState(false)
    const links = ["Home", "Resume", "About me"]

    return (
        <>
        <nav className={styles.navEl}>
            <div className={styles.menuBtn} onClick={() => setOpen(prev => !prev)}>
                <span className={styles.dotBtn}></span>
                <span className={styles.dotBtn}></span>
                <span className={styles.dotBtn}></span>
            </div>

            <a href="https://google.com">
                <img className={styles.logoImg} src={logo} alt="CodeByKanishk" />
            </a>
            <ul className={styles.ulEl}>
                {links.map(link => <a key={link} className={styles.navLink} href="#">
                                          {link}</a>)}
            </ul>
            <div className={styles.status}>
                <span className={styles.dot} style={{ "--dot-color": color }}></span>
                {status}
            </div>
        </nav>
      {
        open &&  (
            <div className={styles.mobileMenu}>
                {links.map(link => (
                    <div key={link}>{link}</div>
                ))}
            </div>
        )
    }
    </>
    )

}
export default Nav