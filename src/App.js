import AddTodo from "./component/formAddTodo";
import {useSelector}from 'react-redux';
import TodoItem from './component/TodoItem';

function App() {
  const todos=useSelector(state=>state.todos.list)
  console.log(todos)
  return (
        <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-3xl border">
              <div className="mb-4">
                  <h1 className="text-gray-700 text-3xl font-bold">Todo List</h1>
                  < AddTodo />
                 
              </div>
              {
                todos.length===0
                ?
                <p>there`s enything</p>
                :
                todos.map(todo=><TodoItem  todo={todo}  key={todo.id}/>)
              }
              
              
          </div>
      </div>
  );
}

export default App;
