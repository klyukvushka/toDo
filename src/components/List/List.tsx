import React from "react";
import classNames from "classnames";
import "./List.scss";

import ListItem from "../ListItem/ListItem";

type Props = {
  className?: string;
};

const List: React.FC<Props> = props => {
  const { className } = props;
  const classes = classNames("list", className);

  return (
    <ol className={classes}>
      <ListItem />
    </ol>
  );
};

export default List;
