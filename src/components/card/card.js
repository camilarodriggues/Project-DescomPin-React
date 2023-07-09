import CardBS from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';


export const Card = ({ image, title, total, onClick}) => {
  return (
    <CardBS>
      <CardBS.Img src={image} alt=''/>
      <CardBS.ImgOverlay>
        <Button variant="primary" onClick={onClick}>
        Salvar <Badge bg="secondary">{total}</Badge>
        </Button>
      </CardBS.ImgOverlay>
      <CardBS.Body>
        <CardBS.Title>
        <span>{title}</span>
        </CardBS.Title>
      </CardBS.Body>
    </CardBS>
  );
};

export default Card;
