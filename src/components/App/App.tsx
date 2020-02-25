import React from "react";
import Title from "../Title/Title";
import Form from "../Form/Form";
import { List } from "../List/List";
import ActionPanel from "../ActionPanel/ActionPanel";

import "./App.scss";

export const App: React.FC = () => {
  return (
    <main>
      <div className="container">
        <Title className="title_main">Your ToDo List</Title>
        <Form />
        <Title>List</Title>
        <ActionPanel />
        <List />
      </div>
    </main>
  );
};
