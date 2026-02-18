import Card from 'react-bootstrap/Card';

export function ContentCard({title, content, subtext="", link="", image_url=""}) {

  let image = <></>;
  if (image_url)
    image = <Card.Img variant="top" src={image_url} />;

  let contentSection = <></>;
  if (content)
    contentSection = (
      <Card.Text>
        {content}
      </Card.Text>
    );

  let subtextSection = <></>;
  if (subtext) {
    subtextSection = (
      <Card.Text className='text-muted mt-auto fst-italic'>
        {subtext}
      </Card.Text>
    );
  }

  const cardContent = (
  <>
    <Card className='h-100'>
      {image}
      <Card.Body className='d-flex flex-column'>
        <Card.Title>{title}</Card.Title>
        {contentSection}
        {subtextSection}
      </Card.Body>
    </Card>
  </>
  );

  if (link)
    return (
      <a href={link} className='text-decoration-none'>
        {cardContent}
      </a>
    );
  
  return cardContent;
}
