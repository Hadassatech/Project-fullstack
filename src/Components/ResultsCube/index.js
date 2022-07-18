import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.css";

import "./style.scss";

export default function ResultsCube(data) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{data?.item.Title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p> year: {data?.item.Year}</p>
          <p>imdbID: {data?.item.imdbID}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="wrapper-cards" onClick={handleShow}>
        <Card style={{ width: "18rem", color: "white" }}>
          <Card.Img
            variant="top"
            src={data?.item.Poster}
            height="200"
            width="100"
          />
          <Card.Body>
            <Card.Title>{data?.item.Title}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Type: {data?.item.Type}</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link className="link-image" href={data?.item.Poster}>
              Link for for movie
            </Card.Link>
          </Card.Body>
        </Card>
      </div>
    </>
  );
}
