import React, { Component } from 'react';
import Todoitem from "./todoitem";

export default class todolist extends Component{
    render() {
        return(
            <div>
                <p>hello fromm todolist</p>
                <Todoitem/>
            </div>
        )
    }
}