import { useEffect, useState } from "react"
import { TodoForm,TodoItem } from "./components";
import { TodoProvider } from './contexts';


function App() {
  const [todos, setTodos] = useState([])

  useEffect( ()=>{
    const todos = JSON.parse(localStorage.getItem("todos"))
    if ( todos && todos.length > 0) {
      setTodos(todos)
    }
  },[])

  useEffect( ()=>{
    localStorage.setItem("todos",JSON.stringify(todos))
  },[todos])




  function addTodo(todo) {
    setTodos([...todos,{id: Date.now(), todo}])
  }
  
  function updateTodo(id,todo) {
    setTodos([...todos.map( oldTodo => oldTodo.id === id ? todo :  oldTodo)])
  }
  
  function deleteTodo(id) {
    setTodos([...todos.filter( oldTodo => oldTodo.id !== id )])
  }
  
  function toggleComplete(id) {
    setTodos([...todos.map( oldTodo => oldTodo.id === id ? {...oldTodo, completed: !oldTodo.completed} : oldTodo )])
  } 

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}} >
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {todos.map( todo => (
                          <div key={todo.id}  className='w-full'>
                            <TodoItem todo={todo} /> 
                          </div>
                        ))}
                    </div>
                </div>
            </div>
  </TodoProvider>
  )
}

export default App
