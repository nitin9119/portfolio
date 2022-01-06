import React from "react";
import html from "../Images/html.png";
import css from "../Images/css.png";
import javascript from "../Images/javascript.png";
import react from "../Images/react.png";
import mongodb from "../Images/mongodb.png";
import express from "../Images/expressjs.png";
import nodejs from "../Images/nodejs.png";
import styledcomponents from "../Images/styledcomponents.png";
import git from "../Images/git.png";
import frontend from "../Images/frontend.png";
import backend from "../Images/backend.png";
import ds from "../Images/ds.png";
import Algo from "../Images/Algo.png";
import styles from "../css/TechStacks.module.css";



function TechStacks() {
  return (
    <div className={styles.main}>
      <h1 className={styles.head}>Tech Stacks</h1>
      <div className={styles.skills}>
        <div>
          <img width="50%" src={html} alt="" />
          <div>HTML</div>
        </div>

        <div>
          <img width="50%" src={css} alt="" />
          <div>CSS</div>
        </div>

        <div>
          <img width="50%" src={javascript} alt="" />
          <div>JAVASCRIPT</div>
        </div>

        <div>
          <img width="50%" src={react} alt="" />
          <div>REACTJS</div>
        </div>

        <div>
          <img width="85%" src={express} alt="" />
          <div>EXPRESSJS</div>
        </div>

        <div>
          <img width="50%" src={mongodb} alt="" />
          <div>MONGODB</div>
        </div>

        <div>
          <img width="50%" src={nodejs} alt="" />
          <div>NODEJS</div>
        </div>
        <div>
          <img width="50%" src={styledcomponents} alt="" />
          <div>STYLED-COMPO</div>
        </div>

        <div>
          <img width="50%" src={git} alt="" />
          <div>GIT</div>
        </div>
        <div>
          <img width="50%" src="https://camo.githubusercontent.com/bcd4bda49ef6cd9537db065920f4f4f6ac670eae0e0adf2c5133c19b319f1574/68747470733a2f2f627261646c632e67616c6c65727963646e2e76736173736574732e696f2f657874656e73696f6e732f627261646c632f7673636f64652d7461696c77696e646373732f302e322e302f313535383034303536333634392f4d6963726f736f66742e56697375616c53747564696f2e53657276696365732e49636f6e732e44656661756c74" alt="" />
          <div>TAILWIND CSS</div>
        </div>
      </div>

      <h1 className={styles.head}>Proficiencies</h1>
      <div className={styles.skills}>
        <div>
          <img width="50%" src={frontend} alt="" />
          <div>FRONT-END</div>
        </div>

        <div>
          <img width="50%" src={backend} alt="" />
          <div>BACKEND</div>
        </div>

        <div>
          <img width="50%" src={Algo} alt="" />
          <div>ALGORITHM</div>
        </div>

        <div>
          <img width="50%" src={ds} alt="" />
          <div>DATA STRUCTURE</div>
        </div>

      </div>


      
    </div>
  );
}

export default TechStacks;
