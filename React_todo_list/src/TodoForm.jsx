import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import CreateIcon from '@mui/icons-material/Create';
import IconButton from '@mui/material/IconButton';



import { useState } from 'react';
function TodoForm({addTask}) {
    const [text,setText] = useState("");
    const updateText = (event)=>{
        setText(event.target.value);
    }
    const handleChange = (event) =>{
        event.preventDefault();
        addTask(text);
    }

    return(
        <form onSubmit={handleChange}>
        <TextField 
        id="outlined-basic" 
        label="Task" 
        variant="outlined" 
        onChange={updateText} 
        InputProps={{

            endAdornment:
            <InputAdornment position="end"> 
            <IconButton type='submit'>
            <CreateIcon/>
            </IconButton> 
            </InputAdornment>
            
        }}
        />

        
        </form>
    )
}

export default TodoForm;