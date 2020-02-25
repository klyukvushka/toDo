import React from "react";
import Button from "../Button/Button";
import "./ActionPanel.scss";
import { useDispatch } from "react-redux";
// import { deleteAll } from "../../redux/actions/actions";
import { DELETE_ALL, DELETE_COMPLETED } from "../../redux/constants";

const ActionPanel: React.FC = () => {
  const dispatch = useDispatch();

  const deleteCompleted = (event: React.MouseEvent) => {
    dispatch({ type: DELETE_COMPLETED });
  };

  const deleteTodos = (event: React.MouseEvent) => {
    dispatch({ type: DELETE_ALL });
  };

  return (
    <div className="panel">
      <Button className="btn-completed" onClick={deleteCompleted}>
        Delete completed
      </Button>
      <Button className="btn-delete" onClick={deleteTodos}>
        Delete all
      </Button>
    </div>
  );
};

export default ActionPanel;
