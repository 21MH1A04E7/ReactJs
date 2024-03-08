import './App.css'
import { useState } from 'react';
function App() {
   let [val,setVal]=useState(5);
  const Increment=()=>{
    if(val>=20){
      alert(`we can't increment ${val}`)
    }else{
      setVal(val++)
    }
  }
  const Decrement=()=>{
    if(val<=0){
      alert('can not decrement')
    }else{
      setVal(val--)
    }
  }
  return (
    <>
      <h1>counter value</h1>
      <h2>now value is {val}</h2>
      <button onClick={Increment} className='btn'>increment</button>
      <button onClick={Decrement} className='btn'>decrement</button>
    </>
  )
}
export default App
