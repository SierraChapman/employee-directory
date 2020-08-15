import React, {} from 'react';
import "./style.css";

function SortBtn(props) {

  const { sortEmployees, columnName, descending, state } = props;

  let className = "sort-btn-selected";
  // if this button isn't selected (as indicated by state), apply styling class
  if ((state.sortedBy !== columnName) || (state.descending !== descending)) {
    className = "sort-btn";
  } 

  return (
    <span className={className} onClick={() => sortEmployees(columnName, descending)}>
      {descending ? "⋁" : "⋀"}
    </span>
  );
}

export default SortBtn;
