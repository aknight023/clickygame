import React from "react";
// import "./Title.css";

const Title = props => (
<div className="jumbotron jumbotron-fluid">
    <div className="container">
        <h1 className="display-4">{props.children}</h1>
        <p className="lead">SCORE {props.score} {props.warning}</p>
    </div>
</div>
);
//<h1 className="title"> {props.children} SCORE {props.score} {props.warning}</h1>;
export default Title;
