import {createSlice,nanoid} from '@reduxjs/toolkit'

//may be array or object
const initialState={
    todos:[{id:'1',text:"hii how are you"}]
}

//creating a Slice (reducer)
export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{//property or function
        addTodo:(state,action)=>{
            if(action.payload==''){
                return 
            }
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter(todo=>todo.id!==action.payload)
        }
    }
})

//exporting the functionality 
export const {addTodo,removeTodo}=todoSlice.actions

//for store
export default todoSlice.reducer

/*
nonoid =(to generate the id)
state->providing the control on initial state
action ->data
*/