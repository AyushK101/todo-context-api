import { createContext, useContext } from "react"; 

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "todo msg",
      completed: false,
    }
  ], 
  addTodo: (todo)=>{}, /*todo is msg**/
  updateTodo: (id,todo)=>{},
  deleteTodo: (id)=>{},
  toggleComplete: (id)=>{}
})

export  const useTodo = ()=> useContext(TodoContext)

export const TodoProvider = TodoContext.Provider


