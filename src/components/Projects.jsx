import React from "react";
import styles from "../css/Project.module.css";
import html from "../Images/html30.png";
import css from "../Images/css30.png";
import react from "../Images/react30.png";
import redux from "../Images/redux30.png";
import material from "../Images/material30.png";
import node from "../Images/node30.png";
import mongo from "../Images/mongo30.png";
//import socket from "../Images/socket.png";
import js from "../Images/js30.png";
import buffer from "../Images/buffer.png";
//import chat from "../Images/chat.png";

function Projects() {
  return (
    <>
      <h1 className={styles.head}>Projects</h1>
      <div className={styles.main}>
        <div className={styles.card}>
          <div style={{borderBottom:"1px solid black"}}>
            <img width="100%" src="https://user-images.githubusercontent.com/87423101/141508718-e9148092-a7e3-4394-ba9a-4ce78666d9a7.png" alt="" />
          </div>
          <h4>Lybrate Clone</h4>
          <br />
          <p className={styles.para}>
          A web application where patients can book an appointment with a
          doctor of a particular department and also purchase medicines.
          </p>
          <div className={styles.aDiv}>
            <div>
              <a
                target="_blank" rel="noreferrer"
                href="https://github.com/m-sehrawat/Lybrate-Website-Clone"
              >
                Github
              </a>
            </div>
            <div>
              <a
                target="_blank" rel="noreferrer"
                href="https://m-sehrawat.github.io/Lybrate-Website-Clone/frontend/landingpage.html"
              >
                Demo
              </a>
            </div>
          </div>
          <hr />
          <div className={styles.tech}>
            <div>
              <img src={react} alt="" />
            </div>
            <div>
              <img src={redux} alt="" />
            </div>
            <div>
              <img src={css} alt="" />
            </div>
            <div>
              <img src={node} alt="" />
            </div>
            <div>
              <img src={mongo} alt="" />
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div style={{borderBottom:"1px solid black"}}>
            <img width="100%" src="https://user-images.githubusercontent.com/87423101/141513083-df44b31a-35eb-4e3d-b93b-cbdf9c76d75f.png" alt="" />
          </div>
          <h4>Librate Clone</h4>
          <br />
          <p className={styles.para}>
          A web application where patients can book an appointment with a
          doctor of a particular department and also purchase medicines.
          </p>
          <div className={styles.aDiv}>
            <div>
              <a
                target="_blank" rel="noreferrer"
                href="https://github.com/m-sehrawat/Lybrate-Website-Clone"
              >
                Github
              </a>
            </div>
            <div>
              <a target="_blank" rel="noreferrer" href="https://m-sehrawat.github.io/Lybrate-Website-Clone/frontend/landingpage.html">
                Demo
              </a>
            </div>
          </div>
          <hr />
          <div className={styles.tech}>
            <div>
              <img src={react} alt="" />
            </div>
            <div>
              <img src={redux} alt="" />
            </div>
            <div>
              <img src={css} alt="" />
            </div>
            <div>
              <img src={material} alt="" />
            </div>
            <div>
              <img src={html} alt="" />
            </div>
          </div>
        </div>

        <div className={styles.card}>
          <div style={{borderBottom:"1px solid black"}}>
            <img width="100%" src={buffer} alt="" />
          </div>
          <h4>IndiaMart Clone</h4>
          <br />
          <p className={styles.para}>
          A B2B and B2C web application where business
individuals can get quotations on any product from all over India.
          </p>
          <div className={styles.aDiv}>
            <div>
              <a
                target="_blank" rel="noreferrer"
                href="https://github.com/Upsehu/India-Mart"
              >
                Github
              </a>
            </div>
            <div>
              <a
                target="_blank" rel="noreferrer"
                href="https://nitin9119.github.io/India-Mart/"
              >
                Demo
              </a>
            </div>
          </div>
          <hr />
          <div className={styles.tech}>
            <div>
              <img src={html} alt="" />
            </div>
            <div>
              <img src={js} alt="" />
            </div>
            <div>
              <img src={css} alt="" />
            </div>
          </div>
        </div>

        {/* <div className={styles.card}>
          <div style={{borderBottom:"1px solid black"}}>
            <img width="100%" src={chat} alt="" />
          </div>
          <h4>Chat app</h4>
          <br />
          <p className={styles.para}>
            This chat app privdes real-time message sending and reciving in a
            room with a group of people.
          </p>
          <div className={styles.aDiv}>
            <div>
              <a target="_blank" rel="noreferrer" href="https://github.com/manish7377/chat-app">
                Github
              </a>
            </div>
            <div>
              <a target="_blank" rel="noreferrer" href="https://chat-app-by-manish.netlify.app">
                Demo
              </a>
            </div>
          </div>
          <hr />
          <div className={styles.tech}>
            <div>
              <img src={react} alt="" />
            </div>
            <div>
              <img src={html} alt="" />
            </div>
            <div>
              <img src={css} alt="" />
            </div>
            <div>
              <img src={socket} alt="" />
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
}

export default Projects;
