import React from "react";
// import "./FriendCard.css";

const carImg = {
  width: '250px',
  height: '250px',  
}
const FriendCard = props => (
  <div className="card border border-dark" onClick={() => props.checkCard(props.id)} >
    <img className="card-img-top" style={carImg} src={props.image} alt={props.name}/>
    <div className="card-body">
      {props.name}
    </div>
  </div>
);

export default FriendCard;
