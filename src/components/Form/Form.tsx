import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Form.scss";

interface FormProps {
  onAdd(title: string): void;
}

const Form: React.FC<FormProps> = props => {
  const [title, setTitle] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (title.length > 3 && event.key === "Enter") {
      props.onAdd(title);
      setTitle("");
      event.preventDefault();
    }
  };

  const handleClick = (event: React.MouseEvent) => {
    props.onAdd(title);
    setTitle("");
    event.preventDefault();
  };

  return (
    <form className="form">
      <Input
        className="form-input"
        value={title}
        label=""
        type="text"
        name="title"
        id="title"
        placeholder="Enter your todo"
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />
      <Button className="btn-success" onClick={handleClick}>
        Add
      </Button>
    </form>
  );
};

export default Form;
