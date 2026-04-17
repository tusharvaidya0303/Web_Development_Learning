import "./TodoList.css"
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
export default function TodoList() {
    let [todos, setTodos] = useState([{task:"Sample Task",id:uuidv4(), isDone:false }]);
    let [newtodos, setNewTodos] = useState("");

    function addNewTask() {
        setTodos( (privTodos)=> {
            return [...privTodos,{task:newtodos,id:uuidv4(), isDone:false }];
        });
        setNewTodos("");
    }
    let updateTodoValue = (event) => {
        setNewTodos(event.target.value);
    }
    let deleteTask = (id) => {
        setTodos( (privTodos) => {
            return privTodos.filter((todo) => todo.id !== id);
        });
        
    }
let markAsDone = (id) => {
    setTodos(prevTodos =>
        prevTodos.map(todo =>
            todo.id === id ? { ...todo, isDone: true } : todo
        )
    );
};
let clearAll = () => {
    setTodos([]);
};

  return (
    <div className="parent">
      <input type="text" placeholder="Add a Task" value={newtodos} onChange={updateTodoValue}/>
      <button className="add-btn" onClick={addNewTask}>Add Task</button>
      <hr />
      <h4>Task To Do</h4>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} className={todo.isDone ? "done" : ""}>
            <span>{todo.task}</span>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button className="remove-btn" onClick={() => deleteTask(todo.id)}>Delete</button>
            <button className="done-btn" onClick={()=>{markAsDone(todo.id)}} >Mark as Done</button>
            </li>
        ))}
      </ul>
      <button className="clear-btn" onClick={clearAll}>Clear All</button>
    </div>
  );
}
