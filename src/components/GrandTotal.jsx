import { Card, Col, Row } from "react-bootstrap";
const GrandTotal = (props) => {
  return (
    <Card
      bg="dark"
      style={{
        margin: "5px auto",
        width: "95%",
        height: "3rem",
      }}
    >
      <Card.Body>
        <Row>
          <Col>
            <h5>Grand Total:</h5>
          </Col>
          <Col>
            <h5>&#8377; {props.gTotal}</h5>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default GrandTotal;
