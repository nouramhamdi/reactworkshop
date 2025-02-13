import React, { useState } from 'react';
import { Card, Col, Button, Alert, Collapse } from 'react-bootstrap';

const Event = ({ event, onBook }) => {
  const [message, setMessage] = useState('');
  const [liked, setLiked] = useState(event.like);

  const handleBook = () => {
    if (event.nbTickets > 0) {
      onBook(event.name);
      setMessage('You have booked an event!');
      setTimeout(() => setMessage(''), 2000);
    }
  };

  const toggleLike = () => setLiked(!liked);

  return (
    <>
   
     <Col>   
      <Card>
      <Card.Img variant="top" src={event.nbTickets === 0 ? '/src/assets/sold_out.png' : event.img || '/src/assets/placeholder.jpg'} style={{width : "200px"}} />
      <Card.Body>
          <Card.Title>{event.name}</Card.Title>
          <Card.Text>{event.description}</Card.Text>
          <Card.Text>Price: {event.price} DT</Card.Text>
          <Card.Text>Tickets left: {event.nbTickets}</Card.Text>
          <Button onClick={handleBook} disabled={event.nbTickets === 0}>
            {event.nbTickets === 0 ? 'Sold Out' : 'Book an event'}
          </Button>
          <Button onClick={toggleLike} variant="secondary" className="ms-2">
            {liked ? 'Dislike' : 'Like'}
          </Button>                                                                                                                                             
          {message && <Alert variant="success" className="mt-2">{message}</Alert>}
        </Card.Body>
      </Card>
      </Col>
  
  </>
);}

export default Event;