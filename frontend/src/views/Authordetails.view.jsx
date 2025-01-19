import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

//bootstrap import
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
//component import
import AuthorCard from "../components/AuthorCard/AuthorCard.component"; // Importa AuthorCard

const Authordetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [cognome, setCognome] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState("");
  const [avatar, setAvatar] = useState("");

  const author = {
    _id: id,
    nome,
    cognome,
    email,
    data_di_nascita: data,
    avatar,
  };

  const fetchAuthor = async () => {
   try {
    const response = await fetch(`http://localhost:3001/api/authors/${id}`);
    if(!response.ok) {
      navigate("/404"); 
      throw new Error ("errore nella ricezione dati")
    }
    const author = await response.json();

    setNome(author.nome);
    setCognome(author.cognome);
    setEmail(author.email);
    setData(author.data_di_nascita);
    setAvatar(author.avatar);
  } catch (error){
    console.log(error)
  }
  };

  const putAuthor = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/authors/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(author),
      });

      if (!response.ok) {
        throw new Error("Modifica dell'autore non riuscita");
      }

      console.log("Autore modificato con successo!");
    } catch (error) {
      console.error("Errore durante la modifica dell'autore:", error);
    }
  };

  const deleteAuthor = async () => {
    try {
      const response = await fetch(`http://localhost:3001/api/authors/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("Errore durante l'eliminazione dell'autore");
      }
      navigate("/authors")
      alert("Autore eliminato con successo!");
      console.log("Autore eliminato con successo!");
    } catch (error) {
      console.error("Errore:", error);
    }
  };

  useEffect(() => {
    fetchAuthor();
  }, []);

  return (
    <div>
      <Container>
        <Row>
          <Col>
            <h1>Author Details</h1>
          </Col>
        </Row>
        <Row className="me-5">
          <AuthorCard
            _id={author._id}
            nome={author.nome}
            cognome={author.cognome}
            data_di_nascita={author.data_di_nascita}
            email={author.email}
            avatar={author.avatar}
            isLarge={true}
          />
          <Col xs={12} md={6}>
            <h3>Modifica autore</h3>
            <Form>
              <Form.Group className="mb-3" controlId="formNome">
                <Form.Label>Nome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="inserisci il tuo nome"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formCognome">
                <Form.Label>Cognome</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="inserisci il tuo cognome"
                  value={cognome}
                  onChange={(e) => setCognome(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="inserisci la tua email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formData">
                <Form.Label>Data di nascita</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="inserisci la tua data di nascita"
                  value={new Date(data).toLocaleDateString()}
                  onChange={(e) => setData(e.target.value)}
                />
              </Form.Group>
              <Form.Group className="mb-2" controlId="formAvatar">
                <Form.Label>Avatar</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="inserisci un avatar"
                  value={avatar}
                  onChange={(e) => setAvatar(e.target.value)}
                />
              </Form.Group>
              <div className="d-flex pt-5">
                <Button variant="primary" onClick={putAuthor} className="me-4 ">
                  Submit
                </Button>
                <Button variant="danger" onClick={deleteAuthor}>Elimina autore</Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Authordetails;
