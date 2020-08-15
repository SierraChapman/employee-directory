import React, {} from 'react';
import "./style.css";

function Navbar(props) {

  return (
    <header>
      <h1>Employee Directory</h1>
      <input type="text" name="filter" value={props.filter} placeholder="Search" size="30" onChange={props.searchEmployees}/>
    </header>
  );
}

export default Navbar;
