import { useState } from "react";
import { Button } from "react-bootstrap";

function ComponentFonctionnel() {
  const [monTexte, setMonTexte] = useState("hello");
  const [value, setValue] = useState(0);

  const handleClick = () => {
    setValue(value + 1);
  };

  return (
    <>
      Ceci est un composant fonctionnel
      <br />
      {monTexte}
      <br />
      <Button variant="primary" onClick={handleClick}>
        Incrémenter
      </Button>
      <h2>{value}</h2>
    </>
  );
}

export default ComponentFonctionnel;

