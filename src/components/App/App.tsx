import React, { useState } from "react";
import Title from "../Title/Title";
import Form from "../Form/Form";
import List from "../List/List";
import { ITodo } from "../../interfaces/interfaces";

import "./App.scss";

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const addHandler = (title: string) => {
    const newTodo: ITodo = {
      title: title,
      id: Date.now(),
      completed: false
    };
    setTodos(prev => [...prev, newTodo]);
  };

  return (
    <main>
      <div className="container">
        <Title className="title_main">Your ToDo List</Title>
        <Form onAdd={addHandler} />

        <Title>List</Title>
        <List todos={todos} />
      </div>
    </main>
  );
};

export default App;
