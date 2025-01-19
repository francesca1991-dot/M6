import React from "react";

//bootstrap import
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container, Row} from "react-bootstrap";


const NewAuthor = () => {

const handleSubmit = async(event) => {
    event.preventDefault(); 
    try{
    const newAuthor = {
        nome: event.target.formNome.value,
        cognome: event.target.formCognome.value,
        email: event.target.formEmail.value,
        data_di_nascita:  new Date ("05/05/2005"),
        avatar: "https://ui-avatars.com/api/?name=Greco+Lamborghini&size=200&background=random"
    }

    const response = await fetch ("http://localhost:3001/api/authors/new", {
        method: "POST",
        headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(newAuthor)
    });

    if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Errore durante la creazione dell'autore");
      }
    
      console.log("Autore creato con successo!");
    } catch (error) {
      console.error("Errore durante l'invio dei dati:", error.message);
    }
}


  return (
  <Container>
    <Row>
        <h2>Aggiungi un nuovo autore</h2>
    </Row>
    <Row className="mt-4">
  <Form onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formNome">
    <Form.Label>Nome</Form.Label>
    <Form.Control type="text" placeholder="inserisci il tuo nome" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formCognome">
    <Form.Label>Cognome</Form.Label>
    <Form.Control type="text" placeholder="inserisci il tuo cognome" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formEmail">
    <Form.Label>Email</Form.Label>
    <Form.Control type="email" placeholder="inserisci la tua email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formData">
    <Form.Label>Data di nascita</Form.Label>
    <Form.Control type="text" placeholder="inserisci la tua data di nascita" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formAvatar">
    <Form.Label>Avatar</Form.Label>
    <Form.Control type="text" placeholder="inserisci un avatar" />
  </Form.Group>
  
<Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
</Row>
</Container>
  )
};

export default NewAuthor;
