import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../UserContext'
import ToDoList from './ToDoList'
import AddToDo from './AddToDo'
import styles from './ToDo.module.css'

export default function ToDo() {
	const { user } = useContext(UserContext)
	const [todos, setTodos] = useState([])
	const [todoItem, setTodoItem] = useState('')

	return (
		<main className={styles.main}>
			{user.id === null ? (
				<>
					<h1>You are not logged in yet.</h1>
					<button className={styles.login}>
						<Link to='/login'><strong>Go to Login</strong></Link>
					</button>
				</>
			) : (
				<>
                    <h1>{user.id}'s To-Do List</h1>
					<AddToDo
						todoItem={todoItem}
						setTodoItem={setTodoItem}
						todos={todos}
						setTodos={setTodos}
					/>
					<ToDoList todos={todos} setTodos={setTodos} />
				</>
			)}
		</main>
	)
}
