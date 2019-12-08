import React ,{Component}from 'react';
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import Todolist from "./components/todolist";
import Todoinput from "./components/todoinput";

class App extends Component {

  state={
    items:[
      {id:1,title:"something"},
    ],
    id:uuid(),
    item:'',
    editItem:false
  }

  handleChange=(e)=>{
    console.log("handle change");
    
  }
  handlesubmit=(e)=>{
    console.log("handle submit");
    
  }
  clearlist=()=>{
    console.log("clear list");
    
  }
  handledelete=(id)=>{
    console.log(`handle delete ${id}`);
  }

  handleedit=(id)=>{
    console.log(`handle edit ${id}`);
  }

  render() {
    return (
      <div className="container" >
      <div className="row" >
      <div className="col-10 mx-auto col-md-8 mt-5">
        <h3 className="text-capitalize text-center">Todo input</h3>
        <Todoinput 
        item={this.state.item}
        edititem={this.state.editItem}
        handlechange={this.handleChange}
        handlesubmit={this.handlesubmit}
        />
        <Todolist
        items={this.state.items}
        clearlist={this.clearlist}
        handledelete={this.handledelete}
        handleedit={this.handleedit}
        />
      </div>
      </div>
      
      </div>
    );
  }
}


export default App;
