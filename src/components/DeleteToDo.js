import React from 'react'
import styles from './DeleteToDo.module.css'

export default function DeleteToDo({ todoId, todos, setTodos }) {
    // find and delete the todo
	const deleteToDo = () => {
		setTodos(todos.filter(todo => todo.id !== todoId))
	}

	return (
		<button className={styles.delete} onClick={deleteToDo}>
			<i className='fas fa-trash'></i>
		</button>
	)
}
