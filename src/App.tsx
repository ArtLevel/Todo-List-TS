import React, {useState} from 'react';
import TodoForm from './components/TodoForm';
import {Todo} from './types';
import TodoList from './components/TodoList';

import './App.css';

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  const addTodo = (value: Todo['value']) => {
    setTodos(prevState => {
      const newTodo: Todo = {
        id: Math.random(),
        value,
        completed: false
      }

      return [
        ...prevState,
        newTodo
      ]
    })
  }

  const removeTodo = (id: Todo['id']) => {
    setTodos(prevState => prevState.filter(todo => todo.id !== id))
  }

  const toggleTodoCompleted = (id: Todo['id']) => {
    setTodos(prevState => prevState.map(todo => {
      if(todo.id !== id) return todo

      return {
        ...todo,
        completed: !todo.completed
      }
    }))
  }

  return (
    <div className="App">
      <TodoForm addTodo={addTodo}/>
      <TodoList todos={todos} removeTodo={removeTodo} toggleTodoCompleted={toggleTodoCompleted}/>
    </div>
  )
}

export default App;
