import React, { useState, useEffect } from "react";
import { Row, Alert, Container, Col } from "react-bootstrap";
import Event from "./Event";
import Timer from "./Timer";
import { getallEvents, editEvent } from "../Service/api";
const Events = () => {
  const [events, setEvents] = useState([]);
  const [showWelcome, setShowWelcome] = useState(true);

  // useEffect(() => {
  //   fetch("/db.json")
  //     .then((response) => response.json())
  //     .then((data) => setEvents(data));
      
  //   setTimeout(() => setShowWelcome(false), 2000);
  //   return () => clearTimeout(Timer);
  // }, []);
////////////////////////////////////////////////////
const fetchEvents = async () => {
  try {
    const response = await getallEvents(); // Appel de la fonction API
    setEvents(response.data);
  } catch (error) {
    console.error("Erreur lors de la récupération des événements :", error);
  }
};

// Exécuter fetchEvents au montage du composant
useEffect(() => {
  fetchEvents();
  
  // Masquer le message de bienvenue après 2 secondes
  const timer = setTimeout(() => setShowWelcome(false), 2000);

  return () => clearTimeout(timer); // Nettoyage du timeout
}, []);
////////////////////////////////////////////////////
//   const handleBook = (eventName) => {
//     setEvents(
//       events.map((event) =>
//         event.name === eventName
//           ? {
//               ...event,
//               nbTickets: event.nbTickets - 1,
//               nbParticipants: event.nbParticipants + 1,
//             }
//           : event
//       )
//     );
//   };

//   return (
//     <>
//      {/* <Alert variant='info'>message</Alert> */}
//      {showWelcome && <Alert variant="success">heyyyyyyyyy</Alert>}
//       <Container>
//         <Row>
//           {events.map((event) => (
//             <Col>
//               <Event key={event.name} event={event} onBook={handleBook} />
//             </Col>
//           ))}
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default Events;


const handleBook = async () => {
  if (event.nbTickets > 0) {
    try {
      // Créer un nouvel événement mis à jour avec nbTickets - 1
      const updatedEvent = {
        ...event,
        nbTickets: event.nbTickets - 1,
        nbParticipants: event.nbParticipants + 1, // Incrémenter le nombre de participants
      };

      console.log("Mise à jour de l'événement :", updatedEvent);

      // Envoyer la mise à jour au serveur
      await editEvent(event.id, updatedEvent);

      // Appeler `onBook()` pour mettre à jour l'état dans le parent
      onBook(event.id, updatedEvent);

      setMessage('You have booked an event!');
      setTimeout(() => setMessage(''), 2000);
    } catch (error) {
      console.error("Erreur lors de la réservation :", error);
    }
  }
};
return (
  <>
    {showWelcome && <Alert variant="success">Bienvenue aux événements !</Alert>}
    <Container>
      <Row>
        {events.map((event) => (
          <Col key={event.id} md={4}>
            <Event event={event} onBook={() => handleBook(event.id)} />
          </Col>
        ))}
      </Row>
    </Container>
  </>
);
};

export default Events;