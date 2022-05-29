import React,{useState} from 'react'
import { Button, TextField } from '@mui/material';
import { addTodo } from '../util';
const AddTodo = (props)  =>{
    const [addForm, setAddForm] = useState({
		todo: "",
		completed: false,
	});
    const [error,setError] = useState();

    const handleChange = (e) => {
		setAddForm({
			...addForm,
			[e.target.name]: e.target.value,
		});
        setError();
	}

    const onAddTodo = (e) => {
        e.preventDefault();
            addTodo(addForm).then(response=>{
                if(response.msg){
                    setError(response.msg);
                }else{
                    props.setTodos(response)
                }
            })
    }

    return (
        <div>
            <form onSubmit={onAddTodo}>
            <TextField style={{'margin': 10}} label="Add a new todo..." name='todo' variant="filled" onChange={handleChange}/>
            <div><Button variant="contained" type="submit" >Add Todo</Button></div>
            </form>
            {error&&<h3 style={{'color':'red'}}>{error}</h3>}
        </div>
    )
}
export default AddTodo;

