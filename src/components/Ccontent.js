import React from 'react'
import { useContext } from 'react'
import { Langc } from '../mycontexts/Langcontext';
import data from '../assets/data';

export default function Ccontent() {

 const {lang}=useContext(Langc);
  return (
    <div>
        <h1>{data[lang].title}</h1>

        <p> {data[lang].txt}</p>
    </div>
  )
}
