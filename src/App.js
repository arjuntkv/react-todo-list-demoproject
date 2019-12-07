import React from 'react';
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import Todolist from "./components/todolist";
import Todoinput from "./components/todoinput";


function App() {
  return (
    <div className="container">
    <div className="row">
    <Todoinput/>
      <Todolist/>
    </div>
    
    </div>
  );
}

export default App;
