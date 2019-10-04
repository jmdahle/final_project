import React from "react";
import "./style.css";

const GoalCard = ({ selectGoal, goalName, goalTagline, id }) => {
  return (
    <div className="goal-card" onClick={() => selectGoal(id)}>
      <div className="goal-card-header">
        <h5 className="goalCardHeader">{goalName}</h5>
      </div>
      <div className="goal-card-body">
        {goalTagline}
      </div>
    </div>
  );
};

export default GoalCard;
