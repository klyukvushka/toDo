import React from "react";
import Title from "../Title/Title";
import Form from "../Form/Form";
import List from "../List/List";

import "./App.scss";

const App: React.FC = () => {
  return (
    <main>
      <div className="container">
        <Title className="title_main">Your ToDo List</Title>
        <Form />

        <Title>List</Title>
        <List />
      </div>
    </main>
  );
};

export default App;
