import React, { useState } from 'react'
import { Container, Jumbotron, Button, Modal, Form, Row, Col, Card } from 'react-bootstrap'

function Welcome () {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <Container style={{ textAlign: 'center' }}>
        <Jumbotron>

          <h1 style={{ textAlign: 'center', fontSize: '4rem' }}>A Single Source For Education</h1>
          <hr></hr>
          <img src='nz.svg' alt="nz" height="150"/>
          <p>Sign up to begin your learning journey</p>

          <Button style={{ backgroundColor: 'teal' }} onClick={handleShow}>
                Sign up
          </Button>

          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Sign up here!</Modal.Title>
            </Modal.Header>

            <Container>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
              </Form>

            </Container>
            <Modal.Footer>
              <Button variant="danger" onClick={handleClose}>
                Cancel
              </Button>
              <Button variant="success" onClick={handleClose} type="submit">
                Create Account
              </Button>

            </Modal.Footer>
          </Modal>

        </Jumbotron>

        <Row style={{ marginBottom: 50 }}>
          <Col>
            <Card style={{ maxWidth: '35rem' }} className="bg-dark text-white">
              <Card.Img variant="top" src="/learning.png" />
              <Card.Body>
                <Card.Title>Our Goal</Card.Title>

                <Card.Text>
                    Everybody learns is an academic platform for NZQA papers, where all content is taught by some of the best teachers in New Zealand.
                </Card.Text>
                <Card.Text>
                    We aim to expand accessability to learning resources with the goal that anyone and everyone that wants to learn, can learn.
                </Card.Text>

                {/* Need to investigate react hooks - at the moment, if I un-comment the below to have a button on the left hand hard to watch an intro video, then the sign up form also becomes the intro video..... idk */}

                {/* <Button onClick={handleShow}>Watch Our Intro Video</Button>
                <Modal show={show} onHide={handleClose} size="lg">
                  <Modal.Header closeButton>
                    <Modal.Title>Watch Our Intro Video!</Modal.Title>
                  </Modal.Header>
                  <div className="d-block text-center">
                    <iframe width="765" height="450" src="https://www.youtube.com/embed/tyV0vZPqr1U" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </div>
                  <Modal.Footer>
                    <Button variant="danger" onClick={handleClose}>
                Close
                    </Button>

                  </Modal.Footer>
                </Modal> */}
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ maxWidth: '35rem' }} className="bg-dark text-white">
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Welcome
