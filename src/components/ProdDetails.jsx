import { Card } from "react-bootstrap";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import Row from "react-bootstrap/Row";

function ProdDetails(props) {
  let data = require("./assets/pricelist.json");
  const prod =
    data[
      "p" +
        (parseInt(props.pid) < 20 && parseInt(props.pid) > 0 ? props.pid : "")
    ];
  return (
    <Card
      style={{
        margin: "15px 10px",
        display: "flex",
      }}
    >
      <Row>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item style={{ height: "1.9rem" }}>
              Product Name: {prod["Product Name"]}
            </ListGroup.Item>
            <ListGroup.Item style={{ height: "1.9rem" }}>
              Max. Retail Price: &#8377; {prod.MRP}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item style={{ height: "1.9rem" }}>
              GST: &#8377; {prod.GST}
            </ListGroup.Item>
            <ListGroup.Item style={{ height: "1.9rem" }}>
              Discount: {prod["Discount"]}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item style={{ height: "1.9rem" }}>
              Applicable GST: {prod["GST Rate"]}
            </ListGroup.Item>
            <ListGroup.Item style={{ height: "1.9rem" }}>
              Selling Price: &#8377; {prod["Selling Price"]}
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Card>
  );
}

export default ProdDetails;
