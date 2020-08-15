import React, { useReducer } from 'react';
import Navbar from './components/Navbar';
import Table from './components/Table';
import './style.css';

const employees = require("./db/employee.json");
const columns = ["Image", "First Name", "Last Name", "Phone", "Email", "DOB"]; // columns to display
const filterBy = ["name", "Phone", "Email", "DOB"]; // columns to search for search term

function App() {

  // set up state to keep track of display
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "search":
        const filter = action.filter.trim().toLowerCase();
        return {...state, filter: action.filter, employees: state.employees.map(employee => {
          let isMatched = false;
          for (const columnName of filterBy) {
            if (employee[columnName].toLowerCase().includes(filter)) {
              isMatched = true;
              break;
            }
          }
          return {...employee, display: isMatched};
        })};
      default:
        return state;
    }
  }, {
    employees: employees.map(employee => ({...employee, name: employee["First Name"] + " " +  employee["Last Name"], display: true})), // employee list, initialized with all displayed
    filter: "", // string typed in search bar
    sortedBy: "None", // used to determine which arrow to highlight
    descending: false, // also used to determine which arrow to highlight
  });

  const searchEmployees = event => {
    const { value } = event.target;
    dispatch({type: "search", filter: value})
  }

  return (
    <main>
      <Navbar filter={state.filter} searchEmployees={searchEmployees}/>
      <Table state={state} columns={columns}/>
    </main>
  );
}

export default App;
