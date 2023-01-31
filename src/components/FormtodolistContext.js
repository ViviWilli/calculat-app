import React, {useState, useContext, useRef, useEffect} from 'react'
import { DataContext } from './DataProvider'

export default function FormtodolistContext() {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState('');
  const todoInput = useRef();

  const addTodo = e =>{
    e.preventDefault();
    setTodos([...todos, {name: todoName, complete:false}])
    setTodoName('');
    todoInput.current.focus();
  }

  useEffect(() =>{
    todoInput.current.focus();
  },[])
  return (
    
         <form autoComplete='off' onSubmit={addTodo} className='todo-form'>
            <input type="text" name='todos' id='todos' ref={todoInput} className='do-input' value={todoName} onChange={e => setTodoName(e.target.value.toLowerCase())} />
            <button type='submit' className='todo-button'>Creer</button>
        </form>
   
  )
}
