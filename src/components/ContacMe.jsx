import React from "react";
import styles from "../css/Contact.module.css";
//import stats1 from "../Images/stats1.png";
//import stats2 from "../Images/stats2.png";
import stats3_1 from "../Images/stats3.1.png";
import stats3_2 from "../Images/stats3.2.png";
import github from "../Images/github.png";
import location from "../Images/location.png";
import phone from "../Images/phone.png";
import mail from "../Images/mail.png";
import linkedin from "../Images/linkedin.png";
//import GitHubCalendar from "react-github-calendar"

function ContacMe() {
  return (
    <div className={styles.contactMain}>
      <div className={styles.statsDiv}>
        <div>
          <img width="100%" src="https://camo.githubusercontent.com/03cd9a74bb989ae530a9b4c3b16d17d5eff349d0933c023dbd2105b84c540862/687474703a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d3f757365723d6e6974696e39313139267468656d653d6461726b26686964655f626f726465723d7472756526646174655f666f726d61743d4d2532306a253542253243253230592535442664617465733d304142333132" alt="" />
        </div>
        <div>
          <img width="100%" src="https://camo.githubusercontent.com/65884b89cc93a5aa8aa5a24c34dfddefbb7cc7a98a9c05f9e51476147cc38f95/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d6e6974696e39313139267468656d653d6461726b" alt="" />
         
        </div>
      </div>
      <div className={styles.statsDiv}>
        <img className={styles.visible1} src={stats3_1} alt="" />
        <img className={styles.visible2} src={stats3_2} alt="" />
      </div>
      <div className={styles.div}>
        <div className={styles.contact}>
          <h2 className={styles.head}>Contact Me</h2>
          <p>
            I am available in all the below social networks. You can ping me if
            you need any help regarding react, redux, mongoDB, express, HTML,
            CSS and ES6. I will be happy to help you.
          </p>
        </div>
        <hr />
        <div className={styles.linkDiv}>
          <a
            target="_blank"
            rel="noreferrer"
            href="mailto:nitin.gutpa018@gmail.com"
          >
            <img width="20px" height="20px" src={mail} alt="" />{" "}
            <span>nitin.gutpa018@gmail.com</span>
          </a>
          <a target="_blank" rel="noreferrer" href="tel:+917008939103">
            <img width="20px" height="20px" src={phone} alt="" />{" "}
            <span>+917795002150</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.google.co.in/maps/place/Katni,+Madhya+Pradesh/@23.8237011,80.3648562,13z/data=!3m1!4b1!4m5!3m4!1s0x398161daa3c6993f:0x1ebdf64481dcf437!8m2!3d23.8343441!4d80.3893814"
          >
            <img width="20px" height="20px" src={location} alt="" />{" "}
            <span>Madhya pradesh,India</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/nitin9119"
          >
            <img width="20px" height="20px" src={github} alt="" />{" "}
            <span>Github</span>
          </a>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/nitin-gupta9119/"
          >
            <img width="20px" height="20px" src={linkedin} alt="" />{" "}
            <span>Linkedin</span>
          </a>
        </div>
        <div>Designed by &#128151;Nitin</div>
      </div>
    </div>
  );
}

export default ContacMe;
