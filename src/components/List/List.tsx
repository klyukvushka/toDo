import React from "react";
import classNames from "classnames";

import ListItem from "../ListItem/ListItem";

type Props = {
  className?: string;
};

const List: React.FC<Props> = props => {
  const { className } = props;
  const classes = classNames("list", className);

  return (
    <ul className={classes}>
      <ListItem>item</ListItem>
    </ul>
  );
};

export default List;
