import React, { Component } from 'react';
import Todoitem from "./todoitem";

export default class todolist extends Component{
    render() {
        const{items,handledelete,handleedit,clearlist}=this.props;
        return(
            <ul className="list-group my-5">

                <h3 className="text-capitalize text-center">todo list</h3>


                {items.map((item)=><Todoitem 
                key={item.id} 
                title={item.title} 
                handledelete={()=>handledelete(item.id)}
                 handleedit={()=>handleedit(item.id)}
                 >
                 </Todoitem>)}
                

                <button className="btn btn-block btn-danger text-uppercase mt-5" onClick={clearlist}>
                clear list
                </button>

            </ul>
        )
    }
}