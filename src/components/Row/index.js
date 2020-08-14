import React, {} from 'react';
import "./style.css";

function Row(props) {

  return (
    <tr>
      {props.columns.map(columnName => {
        return <td>{props.data[columnName]}</td>
      })}
    </tr>
  );
}

export default Row;
