import React from 'react'
import { useState } from 'react';
import Formtask from './Formtask';
import Task from './Task';


export default function TodolistProps() {

    const [todos, setTodos]=useState([])

    const addTodo =(text) =>{
      let id = 1;
      if(todos.length  >0){
          id = todos[0].id + 1
  
      }
      let todo = {id: id, text: text, completed: false}
      let newTodos = [todo, ...todos]
      setTodos(newTodos)
  
      
  };
  
  const removeTodo = (id)=>{
    let updatedTodos= [...todos].filter((todo)=> todo.id !== id)
    setTodos(updatedTodos)
  
  }
  
  const completedTodo = (id) =>{
    let updatedTodos = todos.map((todo)=>{
      if (todo.id === id){
        todo.completed = !todo.completed
      }
      return todo
    })
    setTodos(updatedTodos)
  
  }
  
  return (
    <div className='todo-app'>
        <h1> Todo List-App </h1>
    <Formtask addTodo = {addTodo} />
    <hr className='seperator'/>
    {todos.map((todo)=>{
      return(
        <Task removeTodo ={removeTodo} completedTodo={completedTodo} todo = {todo} key={todo.id}/>
      )

    })}</div>
  )
}
