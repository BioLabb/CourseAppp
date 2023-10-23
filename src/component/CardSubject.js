import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function CardSubject({ name, description, img }) {
  return (
    <Card style={{ width: "18rem", margin: "0 10px 0 0" }}>
      <img className="w-100" src={img}></img>
      <Card.Body>
        {/* name course */}
        <Card.Title>{name}</Card.Title>
        {/* infomation */}
        <p className="mutiple-line-text">{description}</p>
        <Card.Link href="#">
          {/* link button see more */}
          <Link to="/course">
            <Button>Xem thêm</Button>
          </Link>
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default CardSubject;
