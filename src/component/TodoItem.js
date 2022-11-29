import{useDispatch} from'react-redux';
import{DeleteTodo} from './../store/slice/todoSlice';
import{DoneTodo} from './../store/slice/todoSlice';
import{useState} from 'react';
import Edittodo from './EditTodo';

function TodoItem({todo}){
    
   const[state,setState]=useState(false)
    const dispatch=useDispatch();
    let DeleteHandler=e=>{
    
        dispatch(DeleteTodo(todo.id))
        
    }
    let inputHandler=e=>{
        setState(true)
    }
    let DoneHandler=e=>{
        dispatch(DoneTodo(todo.id))
    }
  
   
    return(
        <div className="flex mb-4 items-center">
            {
                state ?
                <Edittodo todo={todo} setState={setState}/>
                :
                <>
                    <p className={`mr-auto ${todo.done ? 'line-through text-green-700':'text-gray-700'} `}>{todo.text}</p>
                {
                    todo.done ?
                    <button className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-gray-400 border-gray-400 hover:bg-gray-400" onClick={DoneHandler}>NotDone</button>
                    :
                    <button className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-600 border-green-600 hover:bg-green-600" onClick={DoneHandler}>Done</button>
                }
            
                <button className="p-1 px-2 ml-2 border-2 rounded text-red-600 border-red-600 hover:text-white hover:bg-red-600" onClick={DeleteHandler}>Remove</button>
            
                <button className="p-1 px-2 ml-4 mr-2 border-2 rounded hover:text-white text-green-600 border-green-600 hover:bg-green-600" onClick={inputHandler}>Edit</button>

                </>
                

            }    
     </div>
          
    )
}
export default TodoItem;
