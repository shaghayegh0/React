import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList'
import uuidv4 from 'uuid/v4'

const STORAGE_KEY = 'todos'

function App() {
  // The useState lets us react to data changes in the UI
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function addTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function clearTodo() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  return (
    <>
      <TodoList todos={todos} toggleTodo={toggleTodo} />
      <input ref={todoNameRef} type="text" />
      <button onClick={addTodo}>Add Todo</button>
      <button onClick={clearTodo}>Clear Complete</button>
      <div>{todos.filter(todo => !todo.complete).length} left to do</div>
    </>
  )
}

export default App;
