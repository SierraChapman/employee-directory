import React, {} from 'react';
import Row from '../Row';
import "./style.css";

function Table(props) {

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {props.columns.map(columnName => <th key={columnName} onClick={() => props.sortEmployees(columnName)}>{columnName}</th>)}
          </tr>
        </thead>
        <tbody>
          {props.state.employees.filter(employee => employee.display).map(employee => {
            return <Row data={employee} columns={props.columns} key={employee.name}/>;
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
