import React from 'react'
import {RiDeleteBin6Line} from "react-icons/ri"
import {AiFillCheckSquare} from "react-icons/ai"

function Task(props) {

    const {todo, removeTodo, completedTodo}= props

  return (
    <div className={todo.completed ? "todo-row complete" : "todo-row"}>
        {todo.text}
        <div className='iconsContainer'>
        <RiDeleteBin6Line  style={{marginRight:5 }} onClick={()=>removeTodo(todo.id)}/>
        <AiFillCheckSquare  onClick={() => completedTodo(todo.id)} />
        </div>
    </div>
  )
}

export default Task