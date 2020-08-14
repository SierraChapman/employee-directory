import React, {} from 'react';
import Row from '../Row';
import "./style.css";

function Table(props) {

  return (
    <table>
      <thead>
        {props.columns.map(columnName => <th>{columnName}</th>)}
      </thead>
      <tbody>
        {props.state.employees.map(employee => {
          return <Row data={employee} columns={props.columns}/>;
        })}
      </tbody>
    </table>
  );
}

export default Table;
