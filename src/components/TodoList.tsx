import React, {FC} from 'react';
import {Todo} from '../types';
import TodoItem from './TodoItem';

interface TodoListProps {
	todos: Todo[]
	removeTodo: (id: Todo['id']) => void,
	toggleTodoCompleted: (id: Todo['id']) => void
}

const TodoList: FC<TodoListProps> = ({todos, removeTodo, toggleTodoCompleted}) => {
	return (
		<ul>
			{todos.map(todo => <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo} toggleTodoCompleted={toggleTodoCompleted}/>)}
		</ul>
	);
}

export default TodoList;
