import styles from "./About.module.css"
import Art from "../../assets/faceArt.png"

function About() {
   const aboutMe = {
      whoAmI: "Hey, I'm Aqua. I'm a Computer Science student who enjoys building things, learning new skills, and turning random ideas into real projects. Most of my time is spent coding, exploring AI, working on web development, and constantly picking up something new to learn. When I'm not doing that, you'll probably find me watching anime, learning Japanese, or working on another side project.",

      whatIDo: "I build responsive web applications, explore AI and machine learning, and work on projects that help me improve as a developer. I'm constantly learning new technologies, experimenting with ideas, and turning them into real-world applications."
   }
   return (
      <div className={styles.aboutSec}>
         <h2 className={styles.title}>About <span className={styles.dot}>.</span></h2>
         <div className={styles.wrapper}>
            <img src={Art} alt="Art" />
            <div className={styles.Questions}>
               
               <div className={styles.questionEl}>
                  <h3 >Who am i?</h3>
                  <p className={styles.answer}>{aboutMe.whoAmI}</p>
               </div>

               <div className={styles.questionEl}>
                  <h3>What i do?</h3>
                  <p className={styles.answer}>{aboutMe.whatIDo}</p>
               </div>

            </div>
         </div>
      </div>
   )
}

export default About