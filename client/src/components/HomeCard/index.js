
import React, { Component } from "react";
import './style.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class HomeCard extends Component {
 

render(){
  
  return (
<Row>
    {this.props.categories.map(category => (
      <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={category.categoryImgSrc} />
      <Card.Body>
        <Card.Title>{category.categoryName}</Card.Title>
        <Card.Text>
        {category.categoryTagline}
        </Card.Text>
        <Button >function here</Button>
      </Card.Body>
    </Card>
    </Col>
    ))}
  </Row>  
    
    )
  }



}



export default HomeCard;