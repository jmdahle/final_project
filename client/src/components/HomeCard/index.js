
import React, { Component } from "react";
import { Link } from 'react-router-dom';  

import './style.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class HomeCard extends Component {
 
render(){
  
  return (
      <Row className="homeCardRow">
          {this.props.categories.map(category => (
            <Col key={category._id}>
              <Card className="homeCard" style={{ width: '18rem' }}>
                <Card.Img className="homeCardImg" variant="top" src={category.categoryImgSrc} />
                <Card.Body className="homeCardBody">
                  <Card.Title className="cardTitle">{category.categoryName}</Card.Title>
                  <Card.Text className="homeCardCopy">
                    {category.categoryTagline}
                  </Card.Text>
                  <Link className='inline-link' to={'/addgoal?categoryId=' + category._id}>
                    <Button className="homeCardButton">add goal</Button>
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
      </Row>  
    )
  }
}



export default HomeCard;