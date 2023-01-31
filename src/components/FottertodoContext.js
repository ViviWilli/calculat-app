import React, {useContext, useState} from 'react'
import {DataContext} from './DataProvider'

export default function Fotter() {
  const [checkAll, setCheckAll] = useState(false)
  const [todos, setTodos] = useContext(DataContext)

  const handleCheckAll = () =>{
    const newTodos = [...todos]
    newTodos.forEach(todo =>{
      todo.complete = !checkAll
    })
    setTodos(newTodos)
    setCheckAll(!checkAll)
  }

  const newTodoComplete = ()=>{
    return todos.filter(todo => todo.complete === false)
  }

  const deleteTodo = ()=>{
    setTodos(newTodoComplete())
    setCheckAll(false)
  }


  
  return (
    <>
    
    {
      todos.length === 0 ? <h2>Felicitation! rien a faire</h2>
   
    
      :  <div className="todo-row" >
          <label htmlFor="all">
            <input type="checkbox" name="all" id="all" onChange={handleCheckAll} checked={checkAll} className='todo-input' />
                Tout
          </label>
            <p>Vous avez {newTodoComplete().length} à faire</p>
          <button className="todo-button" id="delete" onClick={deleteTodo} >Supprime</button>
        </div>
    }
    </>   
  )
}
