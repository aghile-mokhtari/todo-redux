import { todoSlice } from "../store/slice/todoSlice";
import {useDispatch} from 'react-redux';
import {addTodo} from './../store/slice/todoSlice';
import {useState} from 'react';
function AddTodo(){
    const[inputhandler,setInputhandler]=useState('')
  const dispatch=useDispatch();
    
    
   let inputHandler=e=>{
       setInputhandler(e.target.value)
      
    }
    let AddTodo=e=>{
        dispatch(addTodo({
            id:new Date().getTime(),
            done:true,
            text:inputhandler
        }))
        setInputhandler('');
        }
       
    
    return(
        <div className="flex mt-4">
            <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-800" onChange={inputHandler}  value={inputhandler} placeholder="Add Todo" />
            <button className="p-2 border-2 rounded text-teal-500 border-teal-500  hover:text-white hover:bg-teal-500" onClick={AddTodo}>Add</button>
        </div>
    )
}
export default AddTodo;