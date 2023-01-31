import  {React ,createContext, useState }  from 'react'
export const Langc=createContext();

export default function Langcontext({children}) {

  const [lang,setlang]=useState('FR');
  return (
    <Langc.Provider value={{lang,setlang }} >
    {children}
    </Langc.Provider>
  )
}


















/*import {React, createContext, useState }from 'react'

export const Langc=createContext();

export default function Langcontext({children}) {

    const [lang,setLang]=useState('FR');
  return (
    <Langc.Provider value={{lang,setLang }} >
    {children}
    </Langc.Provider>
  )
}*/