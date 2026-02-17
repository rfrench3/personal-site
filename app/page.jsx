'use client'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';

import Section from './section';

export default function Portfolio() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}

function Header() {
  return (
    <header className="text-center bg-primary">
      <div className="md-4 d-flex flex-column flex-md-row align-items-center justify-content-center py-2">

        <style>{"img {  max-width: 12rem;border-radius: 50%;box-shadow: 0 2px 8px rgba(0,0,0,0.50);}"}</style>
        <img src="/img/me_square.jpg" alt="Robert French, a close-up of me smiling at the camera" />

        <div className='px-4'>
          <a href="https://www.linkedin.com/in/robert-french-teal-mango/" className="text-decoration-none text-white">
            <h2>Robert French</h2>
            <h2>App and Web Developer</h2>
            <p>Responsive and accessible design</p>
          </a>
        </div>

      </div>
      
      <Navbar />
    </header>
  )
}

function Navbar() {
  return (
  <nav className="col bg-secondary mb-4 py-2">
    <a href="#projects" className="btn btn-outline-dark bg-info ms-2 me-2">Projects</a>
    <a href="#skills" className="btn btn-outline-dark bg-info ms-2 me-2">Skills</a>
    <a href="#education" className="btn btn-outline-dark bg-info ms-2 me-2">Education</a>
  </nav>
  );
}

function Main() {
  return (
    <main>
      <Section title="Projects" json_name="projects.json"/>
      <Section title="Skills" json_name="skills.json"/>
      <Section title="Education" json_name="education.json"/>
    </main>
  )
}

function Footer() {
  return (
    <footer className="bg-light border-top py-4 mt-5">
    <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
      <div className="mb-2 mb-md-0 text-muted small">
        <a href="#" className="text-decoration-none text-muted mx-2 btn">Return to top</a>
      </div>
      <nav>
        <a href="https://github.com/rfrench3" className="text-decoration-none text-muted mx-2 btn">GitHub</a>
        <a href="https://www.linkedin.com/in/robert-french-teal-mango/" className="text-decoration-none text-muted mx-2 btn">LinkedIn</a>
        <ContactModal />
      </nav>
    </div>
  </footer>
  )
}

function ContactModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="text-decoration-none text-muted mx-2 btn" onClick={handleShow}>
        Contact
      </button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Contact Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Feel free to contact me through <a href="https://www.linkedin.com/in/robert-french-teal-mango/">LinkedIn</a>.</p>
          <p>I can also be contacted through my email, <a href="mailto:frenchrobertm@outlook.com">frenchrobertm@outlook.com</a>.</p>
        </Modal.Body>
      </Modal>
    </>
  );
}
