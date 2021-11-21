import { Button, Card, Col } from "react-bootstrap";

function CompCard(props) {
  return (
    <Col>
      <Card border="info" style={{ width: "25rem", marginTop: "5%" }}>
        <Card.Img variant="top" src={props.imgSrc} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.cText}</Card.Text>
          <Button variant="info">Add To Favorites</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CompCard;
