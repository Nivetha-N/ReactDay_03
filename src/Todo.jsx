import React,{useState} from 'react'

function Todo(props) {

    
    return (
        <div>
            <p align="left">Name: {props.name}</p>
            <p align="left">Description: {props.desc}</p>
            <p align="left">Status  <select defaultValue={props.status}>
                <option value='Completed'>Completed</option>
                <option value='Not completed'>Not Completed</option>
                <option value='Pending'>Pending</option>
            </select></p>
            <button className='btn-edit' >Edit</button>
            <button className='btn-delete'>Delete</button>
        </div>
    )
}

export default Todo