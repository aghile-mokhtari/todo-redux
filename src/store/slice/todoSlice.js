import { createSlice } from "@reduxjs/toolkit";

export const todoSlice=createSlice(
    {
        name:'todos',
        initialState:{
            list:[],
           
        },
    
    reducers:{
       addTodo:(state,action)=>{
            state.list.push(action.payload)
        },
        DeleteTodo:(state,action)=>{
          state.list= state.list.filter(todo=>todo.id!==action.payload)
        },
        EditTodo:(state,{payload})=>{
            let newTodo=state.list.find(todo=>todo.id===payload.id)
            newTodo.text=payload.text;  
        },
        DoneTodo:(state,action)=>{
            let NewTodo=state.list.find(todo=>todo.id===action.payload)
            NewTodo.done=!NewTodo.done;
        },

    
   }})
export const {addTodo}=todoSlice.actions;
export const {DeleteTodo}=todoSlice.actions;
export const {EditTodo}=todoSlice.actions;
export const {DoneTodo}=todoSlice.actions;


export default todoSlice.reducer;
