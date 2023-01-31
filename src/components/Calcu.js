import React, { useState } from 'react'
import './style.css'

export default function Calcu() {

 
const [number1,setNumber1]=useState('');

const changement1 =(e)=>{
  setNumber1(e.target.value);
  
}
const [number2,setNumber2]=useState('');

const changement2 =(e)=>{
  setNumber2(e.target.value);
  
}


const [result,setResult]=useState('');



const addition=()=>{

let s=Number(number1)+Number(number2);

setResult(s);

}
const subctruct=()=>{

  let s=number1-number2;
  
  setResult(s);
  
  }

  const mult=()=>{

    let s=number1*number2;
    
    setResult(s);
    
    }
    const div=()=>{

      let s=number1/number2;
      
      setResult(s);
      
      }

  return (
    <div>
      <div className='cali'>
      <h1>Calculator</h1>
        Number1: <input type="text" onChange={(e)=> changement1(e)} value={number1} /> <br /> <br />
        Number1: <input type="text" onChange={(e)=> changement2(e)} value={number2} />
        <br /> <br /><br />
        <input className='mult' type="button" onClick={addition}  value='+' /> 
        <input className='mult' type="button" onClick={subctruct} value='-' /> 
        <input className='mult' type="button" onClick={mult}  value='*' /> 
        <input className='mult' type="button" onClick={div}  value='/' />
        <br /><br /><br />
        Resulat:  <input className='result'   value={result} type="text"  /><br /><br />
      </div>
      

      
    </div>
  )
}
