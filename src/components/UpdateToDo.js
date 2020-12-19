import React, { useState } from 'react'
import styles from './UpdateToDo.module.css'

export default function UpdateToDo({ todos, setTodos, todoId, todoText }) {
	const [show, setShow] = useState(false)
	const [newText, setNewText] = useState('')
	const [todoDone, setTodoDone] = useState(false)

	// toggle input field to update the todo
	const showInput = show === false ? { display: 'none' } : { display: 'block' }
	const toggleInput = () => {
		show === false ? setShow(true) : setShow(false)
	}

	// update todo text and hide the input field
	const updateText = () => {
		const updatedText = {
			id: todoId,
			text: newText
		}
		const updatedTodos = todos.map(todo =>
			todo.id === todoId ? updatedText : todo
		)
		setTodos(updatedTodos)
		setShow(false)
		setNewText('')
	}

	// mark as done
	const textStrike =
		todoDone === true
			? {
					backgroundColor: 'darkgrey',
					color: 'black',
					textDecoration: 'line-through'
			  }
			: null
	const markDone = () => {
		todoDone === false ? setTodoDone(true) : setTodoDone(false)
	}

	return (
		<>
			<div className={styles.update}>
				<button
					type='submit'
					onClick={markDone}
					className={styles.confirmButton}
					style={textStrike}
				>
					{todoDone === false ? (
						<i className='fas fa-check' />
					) : (
						<i className='fas fa-undo' />
					)}
				</button>
				<p className={styles.text} style={textStrike}>
					{todoText}
				</p>
				<div className={styles.input} style={showInput}>
					<input
						type='text'
						value={newText}
						placeholder={todoText}
						onChange={e => setNewText(e.target.value)}
					/>
					<button
						type='submit'
						onClick={updateText}
						className={styles.confirmButton}
					>
						<i className='fas fa-pen' />
					</button>
				</div>
			</div>
			<button
				type='submit'
				onClick={toggleInput}
				className={styles.updateButton}
			>
				{show === false ? (
					<i className='fas fa-pen' />
				) : (
					<i className='fas fa-times' />
				)}
			</button>
		</>
	)
}
