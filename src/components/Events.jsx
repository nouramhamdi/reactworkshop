import React, { useState, useEffect } from "react";
import { Row, Alert, Container, Col } from "react-bootstrap";
import Event from "./Event";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    fetch("/events.json")
      .then((response) => response.json())
      .then((data) => setEvents(data));
      
    setTimeout(() => setShowWelcome(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleBook = (eventName) => {
    setEvents(
      events.map((event) =>
        event.name === eventName
          ? {
              ...event,
              nbTickets: event.nbTickets - 1,
              nbParticipants: event.nbParticipants + 1,
            }
          : event
      )
    );
  };

  return (
    <>
     {/* <Alert variant='info'>message</Alert> */}
     {showWelcome && <Alert variant="success">heyyyyyyyyy</Alert>}
      <Container>
        <Row>
          {events.map((event) => (
            <Col>
              <Event key={event.name} event={event} onBook={handleBook} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default Events;
