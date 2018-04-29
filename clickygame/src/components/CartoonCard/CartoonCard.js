import React from "react";
// import "./CartoonCard.css";

const carImg = {
  width: 'auto',
  height: '250px',  
}
const FriendCard = props => (
  <div className="card border border-dark mb-3 " onClick={() => props.checkCard(props.id)} >
    <img className="card-img-top" style={carImg} src={props.image} alt={props.name}/>
    <div className="card-body">
      {props.name}
    </div>
  </div>
);

export default FriendCard;
