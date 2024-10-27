import {useReducer} from 'react'
interface State{
    count:number;
    error:string|null;
}
interface Action{
    type:'increment'|'decrement'
}
function UseReducerHook() {
    const [state,dispatch]=usereducer();
  return (
    <div>UseReducerHook</div>
  )
}

export default UseReducerHook