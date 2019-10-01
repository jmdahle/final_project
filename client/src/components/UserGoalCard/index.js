import React from "react";
import AppProgressBar from '../AppProgressBar';
// import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import './style.css';

const UserGoalCard = ({ selectGoal, goalName, id, goalPercent }) => {
  return (
    <div className="user-goal-card" onClick={() => selectGoal(id)}>
      <div className="user-goal-card-header">
        <h5>{goalName}</h5>
      </div>
      <div className="user-goal-card-body">
        {/* <p>{tagline}</p> */}
        <br />
        <AppProgressBar goalPercent={goalPercent} />
        <br />
         <Button variant="primary">See Tasks!</Button>
      </div>
    </div>


//  <Card className="user-goal-card">
  // <Card.Img variant="top" src="./images/sadBirthday.jpg" />
  // <Card.Body className="user-goal-card-body">
    // <Card.Title className="user-goal-card-header">{goalName}</Card.Title>
    // <Card.Text>
    // shame, shame, shame on you
    // </Card.Text>
    // <ProgressBar variant="success" now={goalPercent} />
    // <br />
    // <Button variant="primary">See Tasks!</Button>
  // </Card.Body>
// </Card> 


  );
};

export default UserGoalCard;
