import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import './style.css';

const UserGoalCard = ({ selectGoal, goalName, id, goalPercent }) => {
  return (
    // <div className="user-goal-card" onClick={() => selectGoal(id)}>
    //   <div className="user-goal-card-header">
    //     <h5>{goalName}</h5>
    //   </div>
    //   <div className="user-goal-card-body">
    //     <ProgressBar variant="success" now={goalPercent} />
    //   </div>
    // </div>


<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src="./images/sadBirthday.jpg" />
  <Card.Body>
    <Card.Title>{goalName}</Card.Title>
    <Card.Text>
    shame, shame, shame on you
    </Card.Text>
    <ProgressBar variant="success" now={goalPercent} />
    <br />
    <Button variant="primary">See Tasks!</Button>
    {/* a comment */}
  </Card.Body>
</Card>


  );
};

export default UserGoalCard;
