import React, { Component } from 'react'

export default class todoinput extends Component {
    render() {

        const {item,edititem,handlechange,handlesubmit}=this.props;

        return (
            <div className="card card-body my-3">
                <form onSubmit={handlesubmit}>
                    <div className="form-group">

                        {/* for icon
                        <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-white">
                        <i className="fas fa-book"></i>
                        </div>
                        </div> */}

                        {/* for input */}
                        <div className="input-group-append">
                            <input type="text" className="form-control text-capitalize"
                            placeholder="Enter your todo here" value={item} onChange={handlechange}/>
                        </div>

                    </div>

                    <button 
                    type="submit"
                    disabled={item?false:true}
                    className={edititem?"btn btn-danger btn-block mt-3 text-uppercase":"btn btn-block btn-primary mt-3 text-uppercase"}
                    >
                    {edititem?"edit item":"add item"}
                    </button>

                </form>    
            </div>
        )
    } 
}
