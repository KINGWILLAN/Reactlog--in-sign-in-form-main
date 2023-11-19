import React from "react";
import propTypes from "prop-types";

const FormWrapper = ({ headingText, children, directionText }) => {
  return (
    <form className="shadow-2xl mt-16 p-4 max-w-lg w-full space-y-8 ">
      <h1 className="font-bold text-3xl">{headingText}</h1>
      {children}
      {directionText}
    </form>
  );
};

FormWrapper.propTypes = {
  headingText: propTypes.string,
  children: propTypes.array,
  directionText: propTypes.object,
};

export default FormWrapper;
