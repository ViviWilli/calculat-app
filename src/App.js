
import './App.css';
//import Calcu from './components/Calcu';
import Slider from './components/Slider';
import Useref from './components/Useref';
import TodolistProps from './components/TodolistProps';
import Ccontent from './components/Ccontent';
import Cicones from './components/Cicones'
import Langcontext from './mycontexts/Langcontext';
import React from 'react';
import FormtodolistContext from './components/FormtodolistContext';
import ListtodolistContext from './components/ListtodolistContext';
import FottertodoContext from './components/FottertodoContext'
import { DataProvider } from './components/DataProvider';






function App() {
  
  return (
    
    
    <div >

      <div className='todo-app'>
      <Langcontext  >
          
          <Cicones/>

          <Ccontent/>
      </Langcontext>
      </div>
     
     
      <div >
      <TodolistProps className='todo-app'/>
      </div>
      
      
      <div >
      <Slider/>
      </div>
      
      <div className='todo-app' >
      <Useref/>
      </div>
      
      <DataProvider>
    <div className='todo-app'>
        <h1>Todo List with Context</h1>

        <FormtodolistContext/>
        <ListtodolistContext/>
        <FottertodoContext/>

    </div>
    </DataProvider>
      
      
    </div>
    
  );
}

export default App;

//<Calcu/>
//<Slider/>
//<Useref/>