import React, { useRef } from 'react'


export default  function Useref() {

const name1 = useRef();

const test=()=>{
    alert('Thank you for your Comment: ' + name1.current.value);

    name2.current.innerHTML = name1.current.value;
}

const name2 = useRef();


  return (
    <div>

        <h1>Dont forget to Comment!</h1>

        <input className='do-input'  ref={name1} type="text" /><br /><br />

        <input className='todo-button' type="button" value="Comment" onClick={test}/>

        <div  ref={name2}></div>

    </div>
  )
}

