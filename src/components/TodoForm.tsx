import React, {FC, useState, ChangeEvent, FormEvent} from 'react'
import {Todo} from '../types';

interface TodoFormProps {
	addTodo: (value: Todo['value']) => void
}

const TodoForm: FC<TodoFormProps> = ({addTodo}) => {
	const [valueOfInput, setValueOfInput] = useState('')

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const valueOfInput = e.target.value
		setValueOfInput(valueOfInput)
	}

	const handleSubmitForm = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		if(valueOfInput.length !== 0) {
			addTodo(valueOfInput)
			setValueOfInput('')
		}
	}

	return (
		<form onSubmit={(e) => handleSubmitForm(e)}>
			<input type='text' value={valueOfInput} onChange={(e) => handleInputChange(e)}/>
			<button>Add Todo</button>
		</form>
	)
}

export default TodoForm