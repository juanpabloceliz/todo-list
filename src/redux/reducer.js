import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from "./actions"
import { todos } from "./states"

export let reducer = (state = todos, action) => {
  let newTodos
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ADD_TODO:
      newTodos = [...state]
      newTodos.push(action.payload)
      return newTodos
    case DELETE_TODO:
      newTodos = [...state]
      // eslint-disable-next-line eqeqeq
      newTodos = newTodos.filter((todo) => todo.id != action.payload)
      return newTodos
    case UPDATE_TODO:
      newTodos = [...state]
      let index = -1
      for (let i = 0; i < newTodos.length; i++) {
        index++
        // eslint-disable-next-line eqeqeq
        if (newTodos[i].id == action.payload.id) {
          break
        }
      }
      // eslint-disable-next-line eqeqeq
      if (index != -1) {
        newTodos[index] = action.payload
        return newTodos
      }
  }
  return state
}
