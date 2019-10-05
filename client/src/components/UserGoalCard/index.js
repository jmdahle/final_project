import React from "react";
import AppProgressBar from '../AppProgressBar';
 import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import './style.css';


const UserGoalCard = ({ goalName, goalPercent }) => {
  return (
    <div className="user-goal-card">
      <div className="user-goal-card-header">
        <h5 className="userGoalCardHeader">{goalName}</h5>
      </div>
      <div className="user-goal-card-body">
        {/* <br /> */}
        <AppProgressBar goalPercent={goalPercent} />
        <br />
         <Link to="/progress"><Button variant= "primary">See Tasks</Button></Link>
      </div>
    </div>
  );
};

export default UserGoalCard;
