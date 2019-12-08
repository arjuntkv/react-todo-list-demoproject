import React, { Component } from 'react'

export default class todoitem extends Component {
    render() {
        const {title,handledelete,handleedit}=this.props;
        return (
           <li className="list-group-item text-capitalize d-flex justify-content-between my-3">
           <h6>{title}</h6>

            <div className="todo-icon">
            <span className="mx-2 text-success" onClick={handleedit}>
            <i className="fas fa-pen"></i>
            </span>
            <span className="mx-2 text-danger" onClick={handledelete}>
            <i className="fas fa-trash"></i>
            </span>
            </div>

           </li>
        )
    }
}
