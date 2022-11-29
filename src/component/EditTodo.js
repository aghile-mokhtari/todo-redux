import todoSlice from "../store/slice/todoSlice";
import{useState}from 'react';
import {useDispatch}from 'react-redux';
import{EditTodo}from './../store/slice/todoSlice';
function Edittodo({todo,setState}){
    const dispatch=useDispatch();
    const[inputHandler,setInputHandler]=useState('')
    let inputhandler=e=>{
        setInputHandler(e.target.value)
    }
   let EditHandler=e=>{
        dispatch(EditTodo({text:inputHandler,id:todo.id}));
        setInputHandler('');
        setState(false);
        }
    return(
      
        <>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-gray-800"  onChange={inputhandler} value={inputHandler} placeholder={todo.text} />
              <button className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-600 border-green-600 hover:bg-green-600" onClick={EditHandler}>Edit</button>
        </>
    )

}
export default Edittodo;