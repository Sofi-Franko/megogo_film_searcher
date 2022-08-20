import { Card } from 'react-bootstrap';

function FilmCard({ film }) {
  const { imdbID, Title, Poster, Year, Type } = film;

  return (
    <Card key={`film-${imdbID}`}>
      <a href={Poster} target="_blank" rel="noreferrer" aria-current="true">
        <Card.Img variant="top" alt={Title} src={Poster} />
      </a>
      <Card.Body>
        <Card.Title>{Title}</Card.Title>
        <Card.Text className="text-muted" style={{ whiteSpace: 'pre-line' }}>
          {Type}
          <br />
          <small className="text-muted">{Year}</small>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default FilmCard;
