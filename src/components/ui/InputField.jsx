import React from "react";
import TextField from "@mui/material/TextField";
import PropTypes from "prop-types";
const InputField = ({ label, name, value, handleInput }) => {
  return (
    <div>
      <TextField
        id="outlined-basic"
        color="primary"
        fullWidth={true}
        label={label}
        variant="standard"
        name={name}
        value={value}
        onChange={handleInput}
      />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  handleInput: PropTypes.func,
};

export default InputField;
