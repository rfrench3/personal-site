import Card from 'react-bootstrap/Card';

export function ContentCard({title, content, link="", image_url=""}) {

  let image = <></>;
  if (image_url)
    image = <Card.Img variant="top" src={image_url} />;

  const cardContent = (
  <Card className='h-100 bg-light'>
    {image}
    <Card.Body>
      <Card.Title>{title}</Card.Title>
      <Card.Text>
        {content}
      </Card.Text>
    </Card.Body>
  </Card>
  );

  if (link)
    return (
      <a href={link} className='text-decoration-none'>
        {cardContent}
      </a>
    );
  
  return cardContent;
}
