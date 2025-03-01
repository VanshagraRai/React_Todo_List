import { useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline';

import './App.css'
import TodoList from './TodoList';
import CheckboxList from './TodoList';

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <CssBaseline />
      <TodoList/>
      
        
    </>
  )
}

export default App
