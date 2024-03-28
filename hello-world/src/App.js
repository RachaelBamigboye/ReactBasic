import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Hello from './components/Hello';
import Hope from './components/Hope';
import Message from './components/Message';


// you can also write this way
// import {Greet} from './components/Greet';



function App() {
  return (
 <div>
  <Greet name="Elisha" heroName="Batman">
    <p>how are you</p>
  </Greet>
<Hello>
  <button>Action</button>
</Hello>
<Hope name="Tope" heroName="SuperMan">
</Hope>
<Message/>


 </div>
  )
}

export default App;
