import React from "react";

const UserGoalCard = ({ selectGoal, goalName, id }) => {
  return (
    <div className="user-goal-card" onClick={() => selectGoal(id)}>
      <div className="user-goal-card-header">
        <h5>{goalName}</h5>
      </div>
      <div className="user-goal-card-body">display visual details here.</div>
    </div>
  );
};

export default UserGoalCard;
