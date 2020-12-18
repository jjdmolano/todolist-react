import React from 'react'
import styles from './DeleteToDo.module.css'

export default function DeleteToDo({ todoId, todos, setTodos }) {
	const deleteToDo = e => {
		setTodos(todos.filter(todo => todo.id !== todoId))
	}

	return (
		<button className={styles.delete} onClick={e => deleteToDo(e)}>
			<i className='fas fa-trash'></i>
		</button>
	)
}
