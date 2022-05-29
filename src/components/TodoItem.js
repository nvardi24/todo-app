import {  Checkbox, ListItem, ListItemText } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { updateTodo, deleteTodo } from "../util";

const TodoItem = (props) => {
	const { todo, setTodos } = props;
	const onUpdate = (e) => {
		const updatedTodo = { ...todo, completed: e.target.checked };
		updateTodo(updatedTodo).then((response) => setTodos(response));
	};
	const onDelete = () => {
		deleteTodo(todo).then((response) => setTodos(response));
	};

	return (
		<ListItem
			key={todo.id}
			disableGutters
			secondaryAction={
				<IconButton aria-label="comment" onClick={onDelete}>
					<DeleteIcon />
				</IconButton>
			}
		>
			<ListItemText primary={todo.todo} />

			<Checkbox checked={todo.completed} onChange={onUpdate} />
		</ListItem>
	);
};
export default TodoItem;
