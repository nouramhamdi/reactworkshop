import { useState } from "react";
import { Button, Form, ListGroup, Alert } from "react-bootstrap";

function NotesManager({ initialNotes = [] }) {
  const [notes, setNotes] = useState(initialNotes);
  const [newNote, setNewNote] = useState("");
  const [error, setError] = useState("");

  // Ajouter une note
  const addNote = () => {
    const parsedNote = parseFloat(newNote);

    if (isNaN(parsedNote) || parsedNote < 0 || parsedNote > 20) {
      setError("Veuillez entrer une note valide entre 0 et 20.");
      return;
    }

    setNotes([...notes, parsedNote]);
    setNewNote("");
    setError("");
  };

  // Supprimer une note spécifique
  const deleteNote = (index) => {
    setNotes(notes.filter((_, i) => i !== index));
  };

  // Calcul de la moyenne des notes
  const calculateAverage = () => {
    if (notes.length === 0) return 0;
    return (notes.reduce((sum, note) => sum + note, 0) / notes.length).toFixed(2);
  };

  return (
    <div className="p-3">
      <h3>Gestion des Notes</h3>

      {/* Champ pour entrer une nouvelle note */}
      <Form.Group className="mb-3">
        <Form.Control
          type="number"
          value={newNote}
          onChange={(e) => setNewNote(e.target.value)}
          placeholder="Entrez une note (0-20)"
        />
      </Form.Group>

      {error && <Alert variant="danger">{error}</Alert>}

      <Button variant="success" onClick={addNote} className="mb-3">
        Ajouter Note
      </Button>

      {/* Affichage des notes */}
      <h5>Liste des Notes :</h5>
      <ListGroup>
        {notes.map((note, index) => (
          <ListGroup.Item key={index} className="d-flex justify-content-between align-items-center">
            {note}
            <Button variant="danger" size="sm" onClick={() => deleteNote(index)}>
              Supprimer
            </Button>
          </ListGroup.Item>
        ))}
      </ListGroup>

      {/* Affichage de la moyenne */}
      <h5 className="mt-3">Moyenne : {calculateAverage()}</h5>
    </div>
  );
}

export default NotesManager;
