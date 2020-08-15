import React, {} from 'react';
import "./style.css";

function SortBtn(props) {
  /*
  SortBtn take the following props:
  state
  columnName
  decreasing
  sortEmployees
  */

  const { sortEmployees, columnName, decreasing } = props;

  return (
    <span onClick={() => sortEmployees(columnName, decreasing)}>
      {decreasing ? "⋁" : "⋀"}
    </span>
  );
}

export default SortBtn;
