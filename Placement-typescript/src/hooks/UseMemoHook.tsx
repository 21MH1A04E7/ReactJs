import React from 'react'
import {useState,useMemo} from 'react'
import { initialItems } from '../utils/usememo'

const UseMemoHook:React.FC=()=> {
    const [count, setCount] = useState(0)
    const [items]=useState(initialItems);
    //expensive operation 
    //performens problem
    // const selectedItem=items.find((item)=>item.isSelected)


    
    // const selectedItem = useMemo(() => {
    //     console.log('render')
    //     return items.find((item) => item.isSelected); // Explicitly return the found item
    // }, [items]);

    
    const selectedItem=useMemo(()=>{
      console.log('rendering')
      return items.find((item)=>item.id==count)
    },[items,count])

  return (
    <div>
        <h1>useMemo</h1>
        <div>Count: {count}</div>
        <h1>Slected Item: {selectedItem?.id}</h1>
        <button className='bg-blue-500 px-4 py-2 rounded-lg active:opacity-70' onClick={()=>setCount(count+1)}>Increment</button>

    </div>
  )
}

export default UseMemoHook