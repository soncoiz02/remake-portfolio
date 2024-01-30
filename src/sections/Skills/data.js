// Front-end image

import react from "@/assets/imgs/logo/front-end/react.png";
import angular from "@/assets/imgs/logo/front-end/angular.png";
import nextjs from "@/assets/imgs/logo/front-end/nextjs.png";
import mui from "@/assets/imgs/logo/front-end/mui.png";
import redux from "@/assets/imgs/logo/front-end/redux.png";
import html from "@/assets/imgs/logo/front-end/html.png";
import css from "@/assets/imgs/logo/front-end/css.png";
import js from "@/assets/imgs/logo/front-end/js.png";
import sass from "@/assets/imgs/logo/front-end/sass.png";
import tailwind from "@/assets/imgs/logo/front-end/tailwind.png";
import ts from "@/assets/imgs/logo/front-end/ts.png";

// Front-end image

import nodejs from "@/assets/imgs/logo/back-end/nodejs.png";
import mongodb from "@/assets/imgs/logo/back-end/mongodb.png";
import socket from "@/assets/imgs/logo/back-end/socket.png";
import sql from "@/assets/imgs/logo/back-end/sql.png";
import firebase from "@/assets/imgs/logo/back-end/firebase.png";

// Tool image

import figma from "@/assets/imgs/logo/tool/figma.png";
import pts from "@/assets/imgs/logo/tool/pts.png";
import git from "@/assets/imgs/logo/tool/git.png";
import github from "@/assets/imgs/logo/tool/github.png";
import jira from "@/assets/imgs/logo/tool/jira.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const frontEndData = [
  {
    img: react,
    title: "ReactJs",
  },
  {
    img: angular,
    title: "Angular",
  },
  {
    img: nextjs,
    title: "NextJs",
  },
  {
    img: mui,
    title: "Mui",
  },
  {
    img: redux,
    title: "Redux",
  },
  {
    img: html,
    title: "HTML",
  },
  {
    img: css,
    title: "CSS",
  },
  {
    img: js,
    title: "Javascript",
  },
  {
    img: ts,
    title: "Typescript",
  },
  {
    img: sass,
    title: "SASS",
  },
  {
    img: tailwind,
    title: "Tailwind CSS",
  },
];

const backEndData = [
  {
    img: nodejs,
    title: "NodeJs",
  },
  {
    img: mongodb,
    title: "MongoDb",
  },
  {
    img: socket,
    title: "Socket IO",
  },
  {
    img: sql,
    title: "SQL",
  },
  {
    img: firebase,
    title: "Firebase",
  },
];

const toolData = [
  {
    img: figma,
    title: "Figma",
  },
  {
    img: pts,
    title: "Photoshop",
  },
  {
    img: git,
    title: "Git",
  },
  {
    img: github,
    title: "Github",
  },
  {
    img: jira,
    title: "Jira",
  },
];

export const skillsData = [
  {
    title: "Front-end",
    data: frontEndData,
  },
  {
    title: "Back-end",
    data: backEndData,
  },
  {
    title: "Other",
    data: toolData,
  },
];
