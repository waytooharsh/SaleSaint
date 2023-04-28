import FormControl from "react-bootstrap/FormControl";

function prodInputField(props) {
  return (
    <FormControl
      type="text"
      placeholder={props.placeholder}
      size="sm"
      style={{
        flex: "3",
        borderRadius: "25px",
      }}
      onChange={props.onChange}
    />
  );
}

export default prodInputField;
