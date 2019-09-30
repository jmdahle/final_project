// react
import React from "react";

// components
import Container from "../../components/Container";
import { Col, Row } from "../../components/Grid";
import GoalCard from "../../components/GoalCard";

class Manage extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
             <h2>Active Goals</h2> 
            <div>
              {!this.props.userDetails.userGoals ? (
                this.props.userDetails.userGoals.map(userGoal => (
                  <GoalCard
                    id={userGoal._id}
                    key={userGoal._id}
                    goalName={userGoal.goalName}
                  />
                ))
              ) : (
                <span>No goals in this section.</span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Manage;
