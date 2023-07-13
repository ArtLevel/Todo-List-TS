import React, {FC, MouseEvent} from 'react';
import {Todo} from '../types';

interface TodoItemProps {
	todo: Todo,
	removeTodo: (id: Todo['id']) => void,
	toggleTodoCompleted: (id: Todo['id']) => void
}

const TodoItem: FC<TodoItemProps> = ({todo, removeTodo, toggleTodoCompleted}) => {

	return (
		<li>
			<input type='checkbox' checked={todo.completed} onChange={() => toggleTodoCompleted(todo.id)}/>
			<span>{todo.value}</span>
			<span className='delete' onClick={() => removeTodo(todo.id)}>&times;</span>
		</li>
	);
}

export default TodoItem;
