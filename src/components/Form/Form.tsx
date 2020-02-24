import React, { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { useDispatch } from "react-redux";
import "./Form.scss";
import { addTodo } from "../../redux/actions/actions";

const Form: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  // для проверки на количество символов, если меньше трех, то выводить предупреждение
  const [message, setMessage] = useState<string>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };
  const dispatch = useDispatch();

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (title.length >= 3 && event.key === "Enter") {
      dispatch(addTodo({ title: title, id: Date.now(), completed: false }));
      setTitle("");
      event.preventDefault();
    }
  };

  const handleClick = (event: React.MouseEvent) => {
    dispatch(addTodo({ title: title, id: Date.now(), completed: false }));
    setTitle("");
    event.preventDefault();
  };

  return (
    <>
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
      <p>{message}</p>
    </>
  );
};

export default Form;
