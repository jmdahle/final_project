import React from "react";
import Hero from "../../components/Hero";
import Row from "react-bootstrap/Row";
import Col from 'react-bootstrap/Col';
import Homecard from "../../components/HomeCard";
// import HomeInfoCard from "../../components/HomeInfoCard";
import Footer from "../../components/Footer";
import "./style.css";
import Card from "../../components/Card";

class Home extends React.Component {
  render() {
    return (
      <div>
        <Hero backgroundImage="images/heroImage.png" />
        <h1 className="aboutUsHeader">About Us</h1>
        <p className="aboutUsCopy">Adulting is hard.<br/>There's no real guidebook on how to do it right and worst of all, thanks to social media, we all believe that everyone seems to have it all together except for ourselves.</p>
        <Row className="rowInfoCards">
        
        <Col>
        <img src="https://emojis.slackmojis.com/emojis/images/1563480763/5999/meow_party.gif?1563480763"></img>
        <h1>about us</h1>
        <p>Lorem Ipsum</p>
          </Col>

          <Col>
        <img src="https://emojis.slackmojis.com/emojis/images/1563480763/5999/meow_party.gif?1563480763"></img>
        <h1>about us</h1>
        <p>Lorem Ipsum</p>
          </Col>

          <Col>
        <img src="https://emojis.slackmojis.com/emojis/images/1563480763/5999/meow_party.gif?1563480763"></img>
        <h1>about us</h1>
        <p>Lorem Ipsum</p>
          </Col>

        </Row>
        <Row className="rowAbout">
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
