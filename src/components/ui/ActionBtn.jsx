import React from "react";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
const ActionBtn = ({ text, weight, handleSubmit }) => {
  return (
    <div>
      <Button
        onClick={handleSubmit}
        color={weight}
        fullWidth
        variant="contained"
      >
        {text}
      </Button>
    </div>
  );
};

ActionBtn.propTypes = {
  text: PropTypes.string,
  weight: PropTypes.string,
  handleSubmit: PropTypes.func,
};

export default ActionBtn;
