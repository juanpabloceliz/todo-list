import React from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import "./App.css"
import "bootstrap/dist/css/bootstrap.css"

function App() {
  return (
    <div className="App container-fluid mt-5">
      <TodoInput />
      <TodoList />
    </div>
  )
}

export default App
