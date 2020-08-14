import React, {} from 'react';
import "./style.css";

function Row(props) {

  return (
    <tr>
      {props.columns.map(columnName => {
        return <td>{columnName !== "Image" ? props.data[columnName] : <img src={`${process.env.PUBLIC_URL}/img/${props.data[columnName]}`} alt={props.data.name}/>}</td>
      })}
    </tr>
  );
}

export default Row;
