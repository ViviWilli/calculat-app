import React, {useState} from 'react'

export default function ListItemstodoContext({todo, id,checkComplete, handleEditTodos}) {

  const [onEdit, setOnEdit] = useState(false)
  const [editValue, setEditValue] = useState(todo.name)

  const handleOnEdit = () =>{
      setOnEdit(true)
  }

  const handleSave = id =>{
    setOnEdit(false)
    if(editValue){
      handleEditTodos(editValue, id)
    }else{
      setEditValue(todo.name)
    }
  }

   if(onEdit){
    return (
      <li>
        <input type="text" id="editValue" value={editValue} name="editValue" onChange={e => setEditValue(e.target.value.toLowerCase())} className='todo-input' />
       
        <button onClick={()=> handleSave(id)}  className='todo-button'>Enregistre</button>
      </li> 
    )

   }else{

    return (
      <li>
        <label htmlFor={id} className={todo.complete ? "active" : ""}>
        <input type="checkbox" id={id} className='todo-input' checked={todo.complete}
          onChange={() => checkComplete(id)} />
          {todo.name}
        </label> 
        <button disabled={todo.complete} onClick={handleOnEdit} className='todo-button'>Edit</button>
      </li> 
    )

   }

  
}
