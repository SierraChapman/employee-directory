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
                <th key={columnName}>
                  { columnName === "Image" ? columnName : (
                    // Render sort buttons except after "Image"
                    <span>
                      {columnName + " "} 
                      <SortBtn descending={false} columnName={columnName} state={props.state} sortEmployees={props.sortEmployees} /> 
                      <SortBtn descending={true} columnName={columnName} state={props.state} sortEmployees={props.sortEmployees} /> 
                    </span>
                  )}
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
