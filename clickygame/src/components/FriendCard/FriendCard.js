import React from "react";
// import "./FriendCard.css";
// const cardStyle = {
//   width: '18rem',
// };
const FriendCard = props => (
  <div className="card" onClick={() => props.checkCard(props.id)} >
  <img className="card-img-top" src={props.image} alt="{props.name}"/>
  <div className="card-body">
    {props.name}
  </div>
</div>
);

// (
//   <div className="card" onClick={() => props.checkCard(props.id)}>
//     <div className="img-container">
//       <img alt={props.name} src={props.image} />
//     </div>
//     <div className="content">
//       <ul>
//         <li>
//           <strong>Name:</strong> {props.name}
//         </li>
//       </ul>
//     </div>
//   </div>
// );

export default FriendCard;
