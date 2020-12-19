import React from 'react'
import styles from './AddToDo.module.css'

export default function AddToDo({ todoItem, setTodoItem, todos, setTodos }) {
	// add new todo object in array
	const addToDo = e => {
		e.preventDefault()
		setTodos([
			...todos,
			{
				id: Math.random(),
				text: todoItem
			}
		])
		setTodoItem('')
	}

	return (
		<form className={styles.main}>
			<input
				type='text'
				value={todoItem}
				onChange={e => setTodoItem(e.target.value)}
				required
			/>
			<button type='submit' onClick={e => addToDo(e)}>
				<i className='fas fa-plus' />
			</button>
		</form>
	)
}
