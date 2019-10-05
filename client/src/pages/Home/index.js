import React from "react";
import Hero from "../../components/Hero";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Homecard from "../../components/HomeCard";
// import HomeInfoCard from "../../components/HomeInfoCard";
import Footer from "../../components/Footer";
import "./style.css";
// import Card from "../../components/Card";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero backgroundImage="images/heroImage.png" />
        <div className="heroImgDiv">
        <img src="images/rockToss.gif" className="heroImg" alt=""/>
        </div>
        <h1 className="aboutUsHeader">Adulting is hard.</h1>
        <p className="aboutUsCopy">There's no real guidebook on how to do it right and worst of all, thanks to social media, we all believe that everyone seems to have it all together except for ourselves.</p>
        <Row className="rowInfoCards">
        
        <Col className="infoCardCol">
        <img src="images/bossYell.jpg" alt="" className="infoCardImg"></img>
        <h1 className="infoCardHeading">our mission</h1>
        <p>Keep It Together was designed to help you build good habits without stressing you out.</p>
          </Col>

          <Col className="infoCardCol">
        <img src="images/sadBirthday.jpg" alt=""  className="infoCardImg"></img>
        <h1 className="infoCardHeading">simple <br/>& fast</h1>
        <p>Easily keep track of your goals, add new ones and level up with each goal completion.</p>
          </Col>

          <Col className="infoCardCol">
        <img src="images/dudeWithShitTogether.jpg" alt=""  className="infoCardImg"></img>
        <h1 className="infoCardHeading">the bigger picture</h1>
        <p>Our visualizer helps you spot trends ranging days and weeks so you will be well on your way to being an adult in no time.</p>
          </Col>
</Row>


        <Row className="getStartedRow">
        <Col>
          <h1 className="getStartedHeader">Let's get started</h1>
          <p className="getStartedBody">Pick your difficulty level<br/> and we'll walk you through the rest.</p>
          </Col>
        </Row>
        <Row className="rowAbout">
          <Homecard categories={this.props.categories} />
        </Row>
        <Footer />
      </div>
    );
  }
}

export default Home;

//  NAv

//hero

// cards clicky

// footer
