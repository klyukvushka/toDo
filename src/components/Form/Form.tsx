import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";

const Form: React.FC = () => {
  return (
    <>
      <Input
        className="form-input"
        label="Enter your todo"
        type="text"
        name="title"
        id="title"
        placeholder="Enter your todo"
      />
      <Button className="btn-succes">Add</Button>
    </>
  );
};

export default Form;
