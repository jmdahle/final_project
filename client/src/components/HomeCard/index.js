
import React, { Component } from "react";
import './style.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import categories from '../../utils/category.json';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { cpus } from "os";
class HomeCard extends Component {
  state={
    categories,
    image:[],
    title:[],
    about:[],
    button:[]

  }


render(){
   console.log(this.state.category)
  return (
<Row>
    {this.state.categories.map(category => (
      <Col>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={category.CategoryImgSrc} />
      <Card.Body>
        <Card.Title>{category.Categoryname}</Card.Title>
        <Card.Text>
        {category.CategoryTagline}
        </Card.Text>
        <Button >{category.ButtonLink}</Button>
      </Card.Body>
    </Card>
    </Col>
    ))}
  </Row>  
    
    )
  }



}



export default HomeCard;