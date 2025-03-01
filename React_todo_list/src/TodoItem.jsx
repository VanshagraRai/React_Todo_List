import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CommentIcon from '@mui/icons-material/Comment';
import CloseIcon from '@mui/icons-material/Close';



function TodoItem({task,removeTask,addCheck}) {
    const labelId = `checkbox-list-label-${task.id}`;
    return (
        <ListItem
          secondaryAction={
            <IconButton edge="end" onClick={()=>removeTask(task.id)} aria-label="comments">
              <CloseIcon />
            </IconButton>
          }
          disablePadding
        >
          <ListItemButton role={undefined} onClick={()=>addCheck(task.id)}  dense>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={task.completed}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}

              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={`${task.text}`} />
          </ListItemButton>
        </ListItem>
      );
        
}

export default TodoItem;