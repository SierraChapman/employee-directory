import React, {} from 'react';
import Row from '../Row';
import "./style.css";

function Table(props) {

  return (
    <table>
      <thead>
        <tr>
          {props.columns.map(columnName => <th key={columnName}>{columnName}</th>)}
        </tr>
      </thead>
      <tbody>
        {props.state.employees.map(employee => {
          return <Row data={employee} columns={props.columns} key={employee.name}/>;
        })}
      </tbody>
    </table>
  );
}

export default Table;
