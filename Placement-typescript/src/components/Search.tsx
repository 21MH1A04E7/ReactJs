
import {memo} from 'react'
interface SearchProps{
    onChange:(text:string)=>void
}

function Search({onChange}:SearchProps) {//function are diffent then it's going to re-render
  console.log('search render...')
  return (
    <input
     type="text"
     placeholder="Search..."
     className="border-2 border-gray-300 rounded-md p-2 w-full focus:outline-none"
     onChange={(e)=>onChange(e.target.value)}
    />
  )
}

export default memo(Search)
//function are diffent for every re-render