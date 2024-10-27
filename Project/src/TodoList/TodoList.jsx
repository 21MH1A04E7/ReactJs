import { React, useState } from "react";
import List from "./List";

function TodoList() {
  const [todo, setTodo] = useState([]);
  const [input,setInput]=useState('')
  const [editId,setEditId]=useState(false)
  const handleSubmit=(()=>{
   if(input==='') return ;
   const id=new Date().getTime()
   const newtodo=[...todo]
   newtodo.push({id,text:input,isCompleted:false,isUpdated:false})
   setTodo(newtodo)
   setInput('')
  })
  const handleKey=(e)=>{
    if(e.key==='Enter') handleSubmit()
  }
  const handleDelete=(id)=>{
    const newTodo=todo.filter((item)=> item.id!=id)
    setTodo(newTodo)
  }
console.log(todo)
  const handleCompleted=(id)=>{
    const newTodo=todo.map((item)=>{
      if(item.id==id){
        return {...item,isCompleted:!item.isCompleted}
      }else{
        return item
      }
    })
    setTodo(newTodo)
  }
  const handleEdit=(id,text)=>{
    const newTodo=todo.map((item)=>{
      if(item.id==id){
        return {...item,text:text}
      }else{
        return item
      }
    })
    setTodo(newTodo)
  }
  return (
    <div className="mx-auto">
      <div className="flex justify-center py-2">
        <div className="flex justify-center " onKeyDown={handleKey}>
          <input type="text" placeholder="Add a new Todo" className="px-10 rounded-l-sm bg-slate-200" value={input} onChange={(e)=>setInput(e.target.value)}/>
          <button className="bg-green-500 py-2 px-4 rounded-sm hover:opacity-90 active:bg-indigo-800" onClick={handleSubmit}>Add</button>
        </div>
      </div>
      <div className="mx-auto">
        {todo.map((item)=>(
          <List key={item.id} item={item} handleDelete={handleDelete} handleCompleted={handleCompleted} handleEdit={handleEdit}/>
        ))}
      </div>
    </div>
  );
}

export default TodoList;