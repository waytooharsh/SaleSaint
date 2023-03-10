import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import ProdSearch from "./ProdSearch";
import { BsCart4 } from "react-icons/bs";
import Bill from "./Bill";
import GrandTotal from "./GrandTotal";
function Mainframe() {
  const [itemList, setItemList] = useState([]);
  const [quantities, setQuantities] = useState([]);
  const [total, setTotal] = useState(0);
  return (
    <Card
      bg="primary"
      text="light"
      style={{
        width: "80%",
        height: "calc(90% - 10px)",
        margin: 10,
      }}
    >
      <Card.Header>
        {" "}
        <BsCart4 size="20" />
        {"   Invoice Generator"}
      </Card.Header>
      <Card.Body>
        <ProdSearch
          fetchItems={setItemList}
          quantity={setQuantities}
          gTotal={setTotal}
        ></ProdSearch>
      </Card.Body>
      <Bill particulars={itemList} quan={quantities}></Bill>
      <GrandTotal gTotal={total}></GrandTotal>
    </Card>
  );
}

export default Mainframe;
