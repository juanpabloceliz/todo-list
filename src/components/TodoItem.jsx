import React, { useState } from "react"
import { useDispatch } from "react-redux"
import { deleteTodo, updateTodo } from "../redux/actions"

function TodoItem({ todo }) {
  const [editable, setEditable] = useState(false)
  const [name, setName] = useState(todo.name)
  let dispatch = useDispatch()
  return (
    <div>
      <div className="row m-3 align-items-center justify-content-center rounded">
        <div className="item col-5 rounded py-4 text-center text-justify">
          {editable ? (
            <input
              type="text"
              className="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          ) : (
            <p>{todo.name}</p>
          )}
        </div>
        <div className="col-3">
          <button
            onClick={() => {
              dispatch(
                updateTodo({
                  ...todo,
                  name: name,
                })
              )
              if (editable) {
                setName(todo.name)
              }
              setEditable(!editable)
            }}
            className="btn btn-primary m-2"
          >
            {editable ? "Update" : "Edit"}
          </button>
          <button
            onClick={() => dispatch(deleteTodo(todo.id))}
            className="btn btn-danger m-2"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default TodoItem
