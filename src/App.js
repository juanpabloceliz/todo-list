import React from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import "bootstrap/dist/css/bootstrap.css"
import "./App.css"

function App() {
  return (
    <div className="App container-fluid pt-5">
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default App
