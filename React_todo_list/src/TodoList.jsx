import { useEffect, useState } from "react";
import List from '@mui/material/List';
import TodoItem from "./TodoItem";
import TodoForm from "./TodoForm";
import { v4 as uuid } from 'uuid';
import { Box } from "@mui/material";


function TodoList() {

    const getInitialData = () =>{
        const val = JSON.parse(localStorage.getItem("todo"));
        if(!val)
            return [];
        return val;
    }
    
    const [todo, setTodo] = useState(getInitialData);

    useEffect(()=>{
      localStorage.setItem("todo",JSON.stringify(todo))
    },[todo])
    const removeTask = (id) =>{
        setTodo((prevTodo) =>(
          prevTodo.filter((task) =>
            task.id !== id
          )
        )
      );
            
    }

    const addCheck = (id) =>{
      setTodo((prevTodo)=>{
        return prevTodo.map((t)=>{
          if(t.id === id)
              return ({...t,completed:!t.completed});
          return {...t};
        })
      })
    }

    const addTask = (text) =>{
      setTodo((prevState)=>{
        return [...prevState,{id:uuid(),text:text,completed:false}]
      })
    }



    return (
      <Box 
      sx={{ 
        display:"flex",
        justifyContent:"center",
        flexDirection:"column",
        alignItems:"center" 
      }}
      
      > 
    <h1>Todo List</h1>
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {todo.map((task) => {
        return(
            <TodoItem key={task.id} task={task} removeTask={removeTask} addCheck={addCheck} />
        );
      })}
      <TodoForm addTask={addTask}/>
    </List>
    </Box>
  );
}


export default TodoList;