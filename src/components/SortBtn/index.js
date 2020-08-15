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

  return (
    <span>{ props.decreasing ? "⋁" : "⋀" }</span>
  );
}

export default SortBtn;
