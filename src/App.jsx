import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar/Navbar'
import Carrito from  './img/carrito.png'


import './App.css'

function App() {
let count = 0

  const addCount = () => {
    count = count +1
    console.log(count)
  }

  return (
    <div>
      <Navbar />
     <img className='Carrito' src={Carrito}></img>
 <label>
<strong> {count}</strong>
 </label>
 <button onClick= {addCount}>  + 1</button>
    
    </div>
  ) 
    
      
       
}

export default App
