import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addEvent } from "../Service/api"; // Importer l'API

const AddEvent = () => {
  const [event, setEvent] = useState({
    
    name: "",
    description: "",
    price: 0,
    nbTickets: 0,
    nbParticipants: 0,
    like: false,
  });

  const [image, setImage] = useState(null); // Stocker l’image
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setImage(e.target.files[0]); // Récupérer le fichier sélectionné
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addEvent(event, image); // Envoi des données avec image
      navigate("/events"); // Redirection après ajout
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'événement :", error);
    }
  };

  return (
    <div>
      <h2>Add New Event</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" value={event.name} onChange={handleChange} required />

        <label>Description:</label>
        <textarea name="description" value={event.description} onChange={handleChange} required />

        <label>Price:</label>
        <input type="number" name="price" value={event.price} onChange={handleChange} required />

        <label>Tickets:</label>
        <input type="number" name="nbTickets" value={event.nbTickets} onChange={handleChange} required />

        <label>Participants:</label>
        <input type="number" name="nbParticipants" value={event.nbParticipants} onChange={handleChange} required />

        <label>Image:</label>
        <input type="file" onChange={handleFileChange} accept="image/*" required />

        <button type="submit">Add Event</button>
      </form>
    </div>
  );
};

export default AddEvent;
