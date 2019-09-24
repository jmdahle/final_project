import React from "react";

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

class App extends Card{
  state={
    Catagory,
    image:[],
    title:[],
    about:[],
    button:[]

  }
}

function HomeCard(props){
   
        return (
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={props.image} />
  <Card.Body>
    <Card.Title>{props.title}</Card.Title>
    <Card.Text>
    {props.body}
    </Card.Text>
    <Button >{props.button}</Button>
  </Card.Body>
</Card>
    )
}


export default HomeCard;