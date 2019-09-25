import React from "react";
import Hero from "../../components/Hero";
import Row from "react-bootstrap/Row";
// import Col from 'react-bootstrap/Col';
import Homecard from "../../components/HomeCard";

import Footer from "../../components/Footer";
import "./style.css";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero backgroundImage="https://files.slack.com/files-pri/TH6SQL9BJ-FNNH5G2DD/hero.png" />
        <h1 className="home">About us Copy</h1>
        <Row className="rowabout">
          <Homecard categories={this.props.categories} />

          {/* <Col>
           <Homecard />
       </Col>
       <Col>
            <Card
              image="https://img.freepik.com/free-vector/natural-background-with-colorful-painted-flowers_52683-17981.jpg?size=626&ext=jpg"
              title="Catagory"
              body="some kind of info about it"
              button="Go here"
            />
       </Col>
       <Col>
            <Card
              image="https://img.freepik.com/free-vector/natural-background-with-colorful-painted-flowers_52683-17981.jpg?size=626&ext=jpg"
              title="Catagory"
              body="some kind of info about it"
              button="Go here"
            />
       </Col>
      

        </Row>
        <Row className="rowabout">
        <Col>
            <Card
            image="https://img.freepik.com/free-vector/natural-background-with-colorful-painted-flowers_52683-17981.jpg?size=626&ext=jpg"
            title="Catagory"
            body="some kind of info about it"
            button="Go here"
            />
       </Col>
       <Col>
            <Card
              image="https://img.freepik.com/free-vector/natural-background-with-colorful-painted-flowers_52683-17981.jpg?size=626&ext=jpg"
              title="Catagory"
              body="some kind of info about it"
              button="Go here"
            />
       </Col>
       <Col>
            <Card
              image="https://img.freepik.com/free-vector/natural-background-with-colorful-painted-flowers_52683-17981.jpg?size=626&ext=jpg"
              title="Catagory"
              body="some kind of info about it"
              button="Go here"
            />
       </Col>
       */}
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
