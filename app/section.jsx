'use client'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { useState, useEffect } from 'react';
import { ContentCard as Card } from './card';

export default function Section({title, json_name}) {
  const [cards, setCards] = useState([]);
  
  useEffect(() => {
    fetch(json_name)
      .then(response => response.json())
      .then(entries => {
        setCards(entries);
      })
      .catch(error => console.error('Error loading json:', error));
  }, [json_name]);

  return (
    <section id={title.toLowerCase()}>
      
      <Container>
        <h2 className="text-center">{title}</h2>
        <hr></hr>
        <Row>
          {cards.map((entry, index) => (
            <Col key={index} md={6} lg={4} className="mb-4">
              <Card 
                title={entry.title} 
                content={entry.content}
                link={entry.link}
                image_url={entry.image_url}
              />
            </Col>
          ))}
        </Row>
      </Container>
      
    </section>
  )
}
