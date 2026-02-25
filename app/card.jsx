import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

export function ContentCard({ title, content, subtext = "", link = "", image_url = "" }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div onClick={handleShow} style={{ cursor: 'pointer' }} className='h-100'>
        <Card className='h-100'>
          <Card.Body className='d-flex flex-column'>
            <Card.Title>{title}</Card.Title>
            {content && <Card.Text>{content}</Card.Text>}
            {subtext && <Card.Text className='text-muted mt-auto fst-italic'>{subtext}</Card.Text>}
          </Card.Body>
        </Card>
      </div>

      <Modal show={show} onHide={handleClose} className='modal' centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {content && <p>{content}</p>}
          {subtext && <p className='text-muted fst-italic'>{subtext}</p>}
        </Modal.Body>
        {image_url && (
          <div style={{ backgroundColor: 'rgba(20, 20, 20, 0.2)', display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
            <img src={image_url} alt={title} style={{ maxHeight: '16rem', display: 'block' }} />
          </div>
        )}
        {link && (
          <Modal.Footer>
            <a href={link} className="text-decoration-none text-muted mx-2 btn" target="_blank" rel="noopener noreferrer">Learn More</a>
          </Modal.Footer>
        )}
      </Modal>
    </>
  );
}
