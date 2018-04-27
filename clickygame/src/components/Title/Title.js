import React from "react";
// import "./Title.css";

const Title = props => (
<div className="jumbotron jumbotron-fluid text-center rounded border border-dark">    
    <h1 className="display-4">{props.children}</h1>
    <p className="lead">SCORE: {props.score}</p>
    <p className="lead">{props.warning}</p>    
</div>
);
//<h1 className="title"> {props.children} SCORE {props.score} {props.warning}</h1>;
export default Title;
