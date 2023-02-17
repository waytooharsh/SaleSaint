import { useState } from "react";
import { Card } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function Bill(props) {
  const details = [
    "S. No.",
    "Product Name",
    "MRP",
    "Discount",
    "GST Rate",
    "GST",
    "Selling Price",
    "Quantity",
    "Sub Total",
  ];
  return (
    <Card
      style={{
        margin: "10px auto",
        height: "23rem",
        width: "95%",
      }}
    >
      <Card.Header style={{ color: "black" }}>Billing</Card.Header>
      <Card.Body>
        <Table striped variant="dark" size="sm">
          <thead>
            <tr>
              {details.map((info) => {
                return <th>{info}</th>;
              })}
            </tr>
          </thead>
          <tbody>
            {props.particulars.map((item, i) => {
              return (
                <tr>
                  <td>{i + 1}</td>
                  <td>{item["Product Name"]}</td>
                  <td>&#8377; {item.MRP}</td>
                  <td>{item["Discount"]}</td>
                  <td>{item["GST Rate"]}</td>
                  <td>&#8377; {item.GST}</td>
                  <td>&#8377; {item["Selling Price"]}</td>
                  <td>{props.quan[i]}</td>
                  <td>&#8377; {item["Selling Price"] * props.quan[i]}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default Bill;
