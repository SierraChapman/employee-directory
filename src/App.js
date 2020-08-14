import React, { useReducer } from 'react';

const employees = require("./db/employee.json");

function App() {

  // set up state to keep track of display
  const [state, dispatch] = useReducer((state, action) => {
    return state;
  }, {
    employees: employees.map(employee => ({...employee, display: true})), // employee list, initialized with all displayed
    filter: "", // string typed in search bar
    sortedBy: "None", // used to determine which arrow to highlight
    descending: false, // also used to determine which arrow to highlight
  });

  return (
    <h1>Employee Directory</h1>
  );
}

export default App;
