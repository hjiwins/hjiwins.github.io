import { Button } from "@material-ui/core";
import React from "react";
import ProjectCard from "../ui/ProjectCard";
import styles from "./Projects.module.css";

function Projects() {
  return (
    <div className={styles.projectsWrap}>
      <h1 className={styles.projectsTitle}>Projects</h1>
      <div className={styles.cardWrap}>
        <ProjectCard
          image="./images/todaynote.jpg"
          title="Today's Note"
          detail="React 기초 연습을 위해 제작한 웹앱입니다."
          url="https://github.com/hjiwins/Todays-note"
        />
        <ProjectCard
          image="./images/jscal.jpg"
          title="Calculator"
          detail="자바스크립트 모듈을 연습하기 위해 만든 계산기 입니다."
          url="https://github.com/hjiwins/calculator"
        />
        <ProjectCard
          image="./images/tictactoe.jpg"
          title="Tic Tac Toe"
          detail="클래스를 활용하여 제작한 게임입니다."
          url="https://github.com/hjiwins/TicTacToe"
        />
        <ProjectCard
          image="./images/todolist.jpg"
          title="Todo List"
          detail="Node.js 기초 연습을 위해 Todo List를 만들었습니다."
          url="https://github.com/hjiwins/Node.js_todoList-v1"
        />
      </div>
      <div className={styles.buttonWrap}>
        <Button
          href="https://github.com/hjiwins"
          target="blank"
          variant="contained"
          color="primary"
          size="large"
        >
          <img
            src="/images/githubLogo.png"
            style={{ marginRight: "10px" }}
            alt="github logo"
          />
          Git hub 보러가기
        </Button>
      </div>
    </div>
  );
}

export default Projects;
