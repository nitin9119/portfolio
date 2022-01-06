import React from "react";
import styles from "../css/About.module.css";
import profile from "../Images/photo_proff.png";
import github from "../Images/github.png";
import location from "../Images/location.png";
import phone from "../Images/phone.png";
import mail from "../Images/mail.png";
import linkedin from "../Images/linkedin.png";

function About() {
  return (
    <>
    
      <div className={styles.top}>Nitin Gupta &#9997;</div>
      <div className={styles.about}>
        <div className={styles.about_content}>
          <div className={styles.about_content_left}>
            <div className={styles.profile}>
              <img width="100%" src={profile} alt="img" />
            </div>
            <div className={styles.linksDiv}>
              <div>
                <a target="_blank" rel="noreferrer" href="mailto:nitin.gupta018@gmail.com">
                  <img src={mail} alt="img" />
                </a>
              </div>
              <div>
                <a target="_blank" rel="noreferrer" href="tel:+917795002150">
                  <img src={phone} alt="img" />
                </a>
              </div>
              <div>
                <a
                  target="_blank" rel="noreferrer"
                  href="https://www.google.co.in/maps/place/Katni,+Madhya+Pradesh/@23.8237011,80.3648562,13z/data=!3m1!4b1!4m5!3m4!1s0x398161daa3c6993f:0x1ebdf64481dcf437!8m2!3d23.8343441!4d80.3893814"
                >
                  <img src={location} alt="img" />
                </a>
              </div>
              <div>
                <a target="_blank" rel="noreferrer" href="https://github.com/nitin-gupta9119">
                  <img src={github} alt="img" />
                </a>
              </div>
              <div>
                <a
                  target="_blank" rel="noreferrer"
                  href="https://www.linkedin.com/in/nitin-gupta9119/"
                >
                  <img src={linkedin} alt="img" />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.about_content_right}>
            <h1>
              Hi 👋{" "}
              <p className={styles.name}>
                {" "}
                I am <span>Nitin</span>
              </p>
            </h1>
            <br />
            <h4 className={styles.role}>FULL STACK WEB DEVELOPER</h4>
            <p className={styles.content}>
              Aspiring full-stack web developer with efficient problem-solving
              skills and the ability to work in a team. Having good knowledge of
              javascript, data structures, and algorithms. Looking forward to
              work on a challenging project.
            </p>
            <div className={styles.resume}>
              <a
                target="_blank" rel="noreferrer"
                href="https://drive.google.com/file/d/1s8cwX9_vVyLBew9LwpLmy9C4kN9Y9ZgM/view?usp=sharing"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
