import {useEffect} from 'react';
import { loadTodos } from "../util";
import TodoItem from "./TodoItem";
import { List } from '@mui/material';

const Todos = props => {
    useEffect(()=>{
         loadTodos().then(data=>props.setTodos(data));
    },[props])
    const todosArr = props.todos.map((todo)=>
        <TodoItem
        key={todo.id}
        todo={todo}
        setTodos={props.setTodos}
        />
    )

    return (<div>
        <List sx={{ width: '100%', bgcolor: '#DCDCDC	' }}>{todosArr}</List>
    </div>);
};


export default Todos;