import React from "react";
import ProgressBar from 'react-bootstrap/ProgressBar';
// import Card from 'react-bootstrap/Card';
import './style.css';

const UserGoalCard = ({ selectGoal, goalName, id, goalPercent }) => {
  return (
    <div className="user-goal-card" onClick={() => selectGoal(id)}>
      <div className="user-goal-card-header">
        <h5>{goalName}</h5>
      </div>
      <div className="user-goal-card-body">display visual details here.</div>
      <ProgressBar variant="success" now={goalPercent} />
    </div>
  );
};

export default UserGoalCard;
