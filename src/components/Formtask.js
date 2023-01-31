import React, {useState} from 'react'





export default function Formtask(props) {
    

    const [input, setInput] = useState("");
    

    const handleSubmit=(e) =>{
        e.preventDefault()
        props.addTodo(input)
        setInput("")
    }

    

  return (
    
        <form  onSubmit={handleSubmit} className='todo-form'>

            <input onChange={(e) => {setInput(e.target.value)}} className='do-input' type="text" value={input} />
            <button type='submit' className='todo-button'> Ajouter</button>
        </form>
  
  )
}
