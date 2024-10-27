import { useRef, useState } from "react";

function UseRefHook2() {
  const [count, setCount] = useState(0);
  const ref=useRef<null|number>(null)
  const handlestar = () => {
   if(!ref.current){
    ref.current = setInterval(() => {
        setCount((pre) => pre + 1);
      }, 1000);
   }
  };
  const handlestop = () => {
    if(ref.current)
    clearInterval(ref.current)
    ref.current=null
  };
  const handlereset = () => {
    handlestop()
    setCount(0)
  };
  return (
    <div>
      UseRefHook2
      <div>
        <p>Timer : {count}</p>
      </div>
      <div className="flex flex-col gap-2 mb-2">
        <button
          onClick={handlestop}
          className="bg-blue-500 px-4 py-2 rounded-lg active:opacity-75 w-42"
        >
          Stop
        </button>
        <button
          onClick={handlestar}
          className="bg-blue-500 px-4 py-2 rounded-lg active:opacity-75 w-42"
        >
          start
        </button>
        <button
          onClick={handlereset}
          className="bg-blue-500 px-4 py-2 rounded-lg active:opacity-75 w-42"
        >
          reset
        </button>
      </div>
    </div>
  );
}

export default UseRefHook2;
