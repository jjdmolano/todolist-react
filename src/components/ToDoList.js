import React from 'react'
import styles from './ToDoList.module.css'
import DeleteToDo from './DeleteToDo'
import UpdateToDo from './UpdateToDo'

export default function ToDoList({ todos, setTodos }) {
	return (
		<ul className={styles.main}>
			{todos
				.map(todo => {
					return (
						<li key={todo.id}>
							<UpdateToDo
								todos={todos}
								setTodos={setTodos}
								todoId={todo.id}
								todoText={todo.text}
							/>
							<DeleteToDo todoId={todo.id} todos={todos} setTodos={setTodos} />
						</li>
					)
				})
				.reverse()}
		</ul>
	)
}
