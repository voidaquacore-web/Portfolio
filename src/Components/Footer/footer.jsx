import styles from "./footer.module.css"
import linkedin from "../../assets/linkedin.png"
import instagram from "../../assets/instagram.png"
import github from "../../assets/github.png"
import email from "../../assets/email.png"
import arrow from "../../assets/arrow.png"

function Footer() {
    return (
        <div className={styles.footer}>
            <h2>Contact <span className={styles.dot}>.</span></h2>
            <p>Contact me or follow my social media</p>
            <div className={styles.contacts}>
                <div>
                    <div className={styles.container}>
                        <div className={styles.wrapper}><img className={styles.logo} src={linkedin} alt="" /> Linkedin</div>
                        <img src={arrow} alt="" /></div>
                    <div className={styles.container}>
                        <div className={styles.wrapper}> <img className={styles.logo} src={instagram} alt="" />instagram</div>
                        <img src={arrow} alt="" /></div>
                </div>
                <div>
                    <div className={styles.container}>
                        <div className={styles.wrapper}> <img className={styles.logo} src={email} alt="" />Email</div>
                        <img src={arrow} alt="" /></div>
                    <div className={styles.container}>
                        <div className={styles.wrapper}><img className={styles.logo} src={github} alt="" /> Github</div>
                        <img src={arrow} alt="" /></div>
                </div>
            </div>
             <p className={styles.foot}>© {new Date().getFullYear()} Aqua. All rights reserved.</p>
        </div>
    )
}

export default Footer