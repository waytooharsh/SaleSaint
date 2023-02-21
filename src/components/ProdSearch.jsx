import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { IoIosAddCircle } from "react-icons/io";
import ProdDetails from "./ProdDetails";
import { useState, useEffect } from "react";
import "./prodSearchStyle.css";
const ProdSearch = (props) => {
  let pList = require("./assets/pricelist.json");
  const [noOfItem, setNoOfItem] = useState(1);
  const [inputPID, setInputPID] = useState("");
  const [inputQuantity, setQuantity] = useState([]);
  const [invEntry, setInvEntry] = useState([]);
  const [grand, setGrand] = useState(0);
  let updateItems = () => {
    if (parseInt(inputPID) < 20) {
      setInvEntry([...invEntry, pList["p" + inputPID]]);
      setQuantity([...inputQuantity, noOfItem]);
      setGrand(grand + pList["p" + inputPID]["Selling Price"] * noOfItem);
    }
  };

  useEffect(() => {
    props.fetchItems(invEntry);
    props.quantity(inputQuantity);
    props.gTotal(grand.toFixed(2));
  }, [invEntry, inputQuantity]);
  return (
    <div>
      <Form className="searchForm">
        <Form.Label className="label">Product ID:</Form.Label>
        <FormControl
          type="text"
          placeholder="Product ID (1-19)"
          size="sm"
          onChange={(e) => {
            setInputPID(e.target.value);
          }}
          className="inputField"
        />
        <Form.Label className="label">Quantity:</Form.Label>
        <FormControl
          type="text"
          placeholder="Quantity"
          size="sm"
          onChange={(e) => {
            setNoOfItem(e.target.value);
          }}
          className="inputField"
        />
        <Button
          variant="light"
          size="sm"
          className="addbtnstyle"
          onClick={updateItems}
        >
          <IoIosAddCircle
            size="30"
            style={{
              margin: "2",
            }}
            onClick={updateItems}
          />{" "}
          <b>ADD ITEM</b>
        </Button>
      </Form>
      <ProdDetails pid={inputPID}></ProdDetails>
    </div>
  );
};

export default ProdSearch;
