import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import {removeTodo} from '../features/todo/todoSlice'
//store taking todo value

function Todos() {
  //state
  const todos=useSelector(state=>state.todos)
  const dispatch=useDispatch()
  return (
   <>
    <div className='text-yellow-500'>Todos List</div>
    <ul className='list-node'>
      {todos.map((todo)=>(
        <li className='mt-4 flex justify-between items-center
         bg-zinc-800 px-4 py-2 rounded'
         key={todo.id}
         >
          <input type="text" className='outline-none bg-zinc-800 text-xl' value={todo.text} readOnly={true}/>
          <button
          onClick={()=>dispatch(removeTodo(todo.id))}
          className='text-white bg-red-500 border-0 
          py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md'
          >
            Delete
          </button>
        </li>
      ))}

    </ul>
   </>
  )
}

export default Todos