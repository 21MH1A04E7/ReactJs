import "./App.css";
import { useState } from "react";
function App() {
  let [color,setColor]=useState('white')
  return (
    <>
      <div
        className=" h-screen duration-200"
        style={{ backgroundColor: color}}
      >
        <div className=" w-full flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button 
          onClick={()=>setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg">
            Red
          </button>
          <button 
          onClick={()=>setColor("yellow")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg">
            Yellow
          </button>
          <button 
          onClick={()=>setColor("pink")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg">
            Pink
          </button>
          <button 
          onClick={()=>setColor("purple")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg">
            Purple
          </button>
          <button 
          onClick={()=>setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg">
            Green
          </button>
          <button 
          onClick={()=>setColor("orange")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg">
            Orange
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
