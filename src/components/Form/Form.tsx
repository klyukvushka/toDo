import React from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Form.scss";

const Form: React.FC = () => {
  return (
    <form className="form">
      <Input
        className="form-input"
        label=""
        type="text"
        name="title"
        id="title"
        placeholder="Enter your todo"
      />
      <Button className="btn-success">Add</Button>
    </form>
  );
};

export default Form;
