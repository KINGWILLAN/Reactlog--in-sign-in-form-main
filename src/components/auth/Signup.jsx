import React, { useState } from "react";
import FormWrapper from "./FormWrapper";
import InputField from "../ui/InputField";
import ActionBtn from "../ui/ActionBtn";
import { PropTypes } from "prop-types";

const Signup = ({ handleDisplay }) => {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    eamail: "",
    password: "",
  });
  // handle user input

  function handleUserInput(e) {
    const { name, value } = e.target;
    setUserInfo((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  }

  // submit user input
  function handleSubmit(params) {
    console.log(userInfo);
  }

  return (
    <FormWrapper
      headingText={"Create Your Acount"}
      directionText={
        <p className="text-center">
          Already Have an acount?
          <button onClick={handleDisplay}>Log In</button>
        </p>
      }
    >
      <div className="flex gap-5">
        <InputField
          name={"firstName"}
          handleInput={handleUserInput}
          label={"first Name"}
        />
        <InputField
          name={"lastName"}
          handleInput={handleUserInput}
          label={"Last Name"}
        />
      </div>

      <InputField
        name={"phoneNumber"}
        handleInput={handleUserInput}
        label={"Phone Number"}
      />
      <InputField
        name={"eamail"}
        handleInput={handleUserInput}
        label={"Email"}
      />
      <InputField
        name={"password"}
        handleInput={handleUserInput}
        label={"Password"}
      />
      <ActionBtn
        handleSubmit={handleSubmit}
        weight={"error"}
        text={"SIGN UP"}
      />
    </FormWrapper>
  );
};

Signup.propTypes = {
  handleDisplay: PropTypes.func,
};

export default Signup;
