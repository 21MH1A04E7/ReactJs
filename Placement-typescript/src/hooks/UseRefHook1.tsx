import {useEffect,useRef} from 'react'
// import { useState } from 'react';

function UseRefHook1() {

    // const [count, setCount] = useState(0);
    const ref=useRef(0);

    const handlecount=()=>{
        // setCount(count + 1);
        ref.current++;
        console.log('ref count',ref.current)
        // console.log('count',count)
        
    }
    useEffect(()=>{
        console.log('component re-render')
    })
  return (
    <div className='mb-3'>
        <div>
            <p>Count: {ref.current}</p>
        </div>
        <div>
            <button onClick={handlecount}
             className='bg-blue-400 px-4 py-2 rounded-lg'>Increment</button>
        </div>
    </div>
  )
}

export default UseRefHook1