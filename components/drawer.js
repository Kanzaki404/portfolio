import React, { useReducer } from "react";
import styles from "./drawer.module.css";
import MainContentNav from "./MainContentNav/MainContentNav";
import MainContent from "./MainContent/MainContent";

import Image from "next/image";
const ACTIONS = {
  OVERVIEW: "overview",
  EDUCATION: "education",
  PROJECTS: "projects",
  EXPERIENCE: "experience",
};
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.OVERVIEW:
      return { contentType: "overview" };
    case ACTIONS.EDUCATION:
      return { contentType: "education" };
    case ACTIONS.PROJECTS:
      return { contentType: "projects" };
    case ACTIONS.EXPERIENCE:
      return { contentType: "experience" };
    case ACTIONS.ABOUT:
      return { contentType: "about" };
    default:
      return state;
  }
}
export default function Drawer(props) {
  const [state, dispatch] = useReducer(reducer, { contentType: "overview" });

  return (
    <div className={styles[props.drawerOpen]}>
      <div className={styles.closeIcon}>
        <Image
          onClick={() => props.setCurtain(false)}
          src="/close.svg"
          alt="CLOSE"
          width="36"
          height="36"
        />
      </div>

      <div className={styles.elContainer}>
        <div className={styles.navWrapper}>
          <MainContentNav ACTIONS={ACTIONS} state={state} dispatch={dispatch} />
        </div>
        <MainContent contentType={state.contentType} />
      </div>
    </div>
  );
}
