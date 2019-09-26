import React from "react";

// import client API
// import API from "../../utils/API";

// import React components
import Container from "../../components/Container";
import GoalCard from "../../components/GoalCard";

class Manage extends React.Component {
  render() {
    return (
      <div className="manage">
        <Container className="active-goals-section">
          <h2>Active Goals</h2>
          <div>
            {this.props.goals.length > 0 ? (
              this.props.goals.map(goal => (
                <GoalCard
                  id={goal._id}
                  key={goal._id}
                  goalName={goal.goalName}
                />
              ))
            ) : (
              <span>No goals in this section.</span>
            )}
          </div>
          <GoalCard />
        </Container>
        <hr />
        <Container className="achieved-goals-section">
          <h2>Achieved Goals</h2>
          <GoalCard />
        </Container>
      </div>
    );
  }
}

export default Manage;
