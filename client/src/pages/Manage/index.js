// react
import React from "react";

// components
import Container from "../../components/Container";
import { Col, Row } from "../../components/Grid";
import UserGoalCard from "../../components/UserGoalCard";

class Manage extends React.Component {

    componentDidMount = () => {}

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
             <h2>Active Goals</h2> 
            <div>
              {!this.props.userGoals ? (
                this.props.userGoals.map(userGoal => (
                  <UserGoalCard
                    id={userGoal._id}
                    key={userGoal._id}
                    goalName={userGoal.goalName}
                    goalPercent={userGoal.goalPercent}
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
