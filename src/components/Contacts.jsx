import { faArrowLeft,  faInfinity } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Col, Container, Form, Row } from 'react-bootstrap'
import { Bounce, toast ,ToastContainer} from 'react-toastify'
import { faGithub, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import 'react-toastify/dist/ReactToastify.css';
function Contacts() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlebutton = () => {
    // toast.warning("Please Fill the form ...")
    alert("Please Fill the form ...")
  }

  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose={3000}
        theme="light"
        transition={Bounce}
      />
      <div className="container-fluid bg-black vh-100 w-100">
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-10">
            <h1 className='text-center mt-5 text-white'>Contact Me</h1>
            <div className='d-flex align-items-center justify-content-center gap-2'>
              <div style={{ width: "60px", height: "4px", backgroundColor: "red" }}></div>
              <FontAwesomeIcon icon={faInfinity} style={{ color: "#ff0000", fontSize: "20px" }} />
              <div style={{ width: "60px", height: "4px", backgroundColor: "red" }}></div>
            </div>

            <Container id="contact" className="py-5">

              <Row>
                <Col md={6}>
                  <Form>
                    <Form.Group className="mb-3" controlId="name">
                      <Form.Label>Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter your name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="email">
                      <Form.Label>Email</Form.Label>
                      <Form.Control type="email" placeholder="Enter your email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="message">
                      <Form.Label>Message</Form.Label>
                      <Form.Control as="textarea" rows={4} placeholder="Your message" />
                    </Form.Group>
                    <Button onClick={handlebutton} className='form-control mt-2' variant="primary" type="submit">
                      Send Message
                    </Button>
                  </Form>
                </Col>
                <Col md={6} className="text-center d-flex flex-column justify-content-center mt-2">
                  <h4>Connect with me</h4>
                  <div className="d-flex justify-content-center gap-3 mt-3">
                    <a href="https://www.linkedin.com/in/amritharaveendran/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faLinkedin} size="lg" style={{ color: "#ffffff", }} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faWhatsapp} size="lg" style={{ color: "#ffffff", }} />
                    </a>
                    <a href="https://github.com/Amritha-Raveendran/" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faGithub} size="lg" style={{ color: "#ffffff", }} />
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      <FontAwesomeIcon icon={faTwitter} size="lg" style={{ color: "#fcfcfc", }} />
                    </a>
                  </div>
                  <p onClick={handleShow} style={{ cursor: "pointer" }} className=' mt-2' >
                    Touch Here
                  </p>



                  {/* MODAL */}
                  <Modal show={show} onHide={handleClose} centered size='lg' className='body-black'>
                    
                    <Modal.Body className='text-center text-light' style={{fontSize:"30px"}} >Thank you , for visiting.</Modal.Body>
                    <Modal.Footer>
                      <Button variant="primary" onClick={handleClose}>
                        Close
                      </Button>

                    </Modal.Footer>
                  </Modal>
                </Col>
              </Row>
            </Container>
          </div>
          <div className="col-md-1"></div>
        </div>
        <Link className="position-absolute bottom-0 end-0 text-white m-5" to={'/'} style={{ textDecoration: "none", textAlign: 'right' }}><h4 className=' mt-3 text-white'> <FontAwesomeIcon icon={faArrowLeft} fade style={{ color: "#ffffff", }} /> Back to Home  </h4></Link>
      </div>

    </>
  )
}

export default Contacts