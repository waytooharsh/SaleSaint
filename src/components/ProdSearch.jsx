import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import { IoIosAddCircle } from "react-icons/io";
import ProdDetails from "./ProdDetails";

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
  const addbtnstyle = {
    padding: "4px",
    border: "none",
    margin: "0px 20px",
    flex: "1",
  };
  useEffect(() => {
    props.fetchItems(invEntry);
    props.quantity(inputQuantity);
    props.gTotal(grand);
  }, [invEntry, inputQuantity]);
  return (
    <div>
      <Form
        style={{
          display: "flex",
        }}
      >
        <Form.Label
          style={{
            flex: "1",
            margin: "10px",
          }}
        >
          Product ID:
        </Form.Label>
        <FormControl
          type="text"
          placeholder="Product ID"
          size="sm"
          onChange={(e) => {
            setInputPID(e.target.value);
          }}
          style={{
            flex: "3",
            borderRadius: "25px",
          }}
        />
        <Form.Label
          style={{
            flex: "1",
            margin: "10px",
          }}
        >
          Quantity:
        </Form.Label>
        <FormControl
          type="text"
          placeholder="Quantity"
          size="sm"
          onChange={(e) => {
            setNoOfItem(e.target.value);
          }}
          style={{
            flex: "3",
            borderRadius: "25px",
          }}
        />
        <Button
          variant="light"
          size="sm"
          style={addbtnstyle}
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
