import React from "react";
import "./Title.css";

const Title = props => <h1 className="title">{props.children} SCORE {props.score}</h1>;

export default Title;
