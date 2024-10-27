import { useEffect, useRef } from "react"


function UseRefHookDom() {
    const inputRef=useRef<HTMLInputElement | null>(null);
    const handlefocus=()=>{
        if(inputRef.current){
            inputRef.current.focus();//dom manipulation
        }
    }
    useEffect(()=>{
        if(inputRef.current){
            inputRef.current.focus()
        }
    },[])
  return (
    <div className="flex justify-center items-center">
        <div>
            <input ref={inputRef} type='text' placeholder="enter name"/>
        </div>
        <div className="p-2">
            <button onClick={handlefocus} className="bg-blue-400 px-4 py-2 rounded-lg active:opacity-75">enter</button>
        </div>
    </div>
  )
}

export default UseRefHookDom