import React, { useState } from "react"
import { addTodo } from "../redux/actions"
import { v1 as uuid } from "uuid"
import { useDispatch } from "react-redux"

function TodoInput() {
  let [name, setName] = useState()
  let dispatch = useDispatch()
  return (
    <div className='container-fluid'>
      <div id='title' className="row justify-content-center p-3">
        <h1>My to do List</h1>
      </div>
      <div id='input__box' className="row justify-content-center">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          placeholder="Insert your task here :)"
          className="col form-control "
        />
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
  )
}

export default TodoInput
