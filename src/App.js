import React ,{Component}from 'react';
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import Todolist from "./components/todolist";
import Todoinput from "./components/todoinput";

class App extends Component {

  state={
    items:[],
    id:uuid(),
    item:'',
    editItem:false
  }

  // for handling the change- to get the input(todoinput.js)
  handleChange=(e)=>{
    this.setState({
      item:e.target.value
    });
  }

// for handling the submit- to store the todos in the items array(todoinput.js)
  handleSubmit=(e)=>{
    e.preventDefault();

    const newitem={
      id:this.state.id,
      title:this.state.item
    }
    const updateditems=[...this.state.items,newitem]

    this.setState({
      items:updateditems,
      item:'',
      id:uuid(),
      editItem:false
    });
    
  };

// for clearing the list(todolist.js)
  clearlist=()=>{
  this.setState({
    items:[]
  })  
  }

// for handling the todo delete(todolist.js and todoitem.js)
  handledelete=(id)=>{
    const filtereditems = this.state.items.filter(item=>item.id!==id);
    this.setState({
      items:filtereditems
    })
  }

// for handling the todo edit(todolist.js and todoitem.js)
  handleedit=(id)=>{
    const filtereditems = this.state.items.filter(item=>item.id!=id);
    const selecteditem=this.state.items.find((item)=>item.id===id);
     this.setState({
       items:filtereditems,
       item:selecteditem.title,
       id:id,
       editItem:true,
     })
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
        handlesubmit={this.handleSubmit}
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
