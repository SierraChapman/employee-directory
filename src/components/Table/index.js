import React, {} from 'react';
import Row from '../Row';
import SortBtn from '../SortBtn';
import "./style.css";

function Table(props) {

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {props.columns.map(columnName => {
              return (
                <th key={columnName} onClick={() => props.sortEmployees(columnName)}>
                  {columnName + " "} 
                  <SortBtn decreasing={false} /> 
                  <SortBtn decreasing={true} /> 
                </th>
              );
            })}
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
