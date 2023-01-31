import React, { useContext } from 'react'
import imfr from '../assets/france.svg'
import imeng from '../assets/united-kingdom.svg'
import imesp from '../assets/spain.svg'
import { Langc } from '../mycontexts/Langcontext'

export default function Cicones() {

    const {setlang }=useContext(Langc);
  return (
    <div>
        <img onClick={()=>setlang('FR')} src={imfr} width='100' height='100' alt="" />
        <img onClick={()=>setlang('EN')} src={imeng} width='100' height='100' alt="" />
        <img onClick={()=>setlang('ES')} src={imesp} width='100' height='100' alt="" />
    </div>
  )
}
