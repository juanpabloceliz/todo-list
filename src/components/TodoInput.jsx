import React, { useState } from "react"
import { addTodo } from "../redux/actions"
import { v1 as uuid } from "uuid"
import { useDispatch } from "react-redux"

function TodoInput() {
  let [name, setName] = useState()
  let dispatch = useDispatch()
  return (
    <div className='container-fluid'>
      <div id='title' className="row rounded-top justify-content-center py-3">
        <h1>My to do List</h1>
      </div>
      <div id='input' className="row rounded-bottom justify-content-center py-3">
        <div className="col-6 p">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Insert your task here"
          className="col form-control "
        />
        </div>
        <div className='col-2 p-0'>
        <button
          onClick={() => {
            dispatch(
              addTodo({
                id: uuid(),
                name: name,
              })
            )
            setName("")
          }}
          className="btn btn-primary mx-2"
        >
          Add
        </button>
        </div>
      </div>
    </div>
  )
}

export default TodoInput
