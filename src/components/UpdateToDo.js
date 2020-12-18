import React from 'react'
import styles from './UpdateToDo.module.css'

export default function UpdateToDo({ todoText }) {
	return (
		<>
			<div className={styles.input}>
				<p>{todoText}</p>
				<input type='text' />
			</div>
			<button type='submit' className={styles.update}>
				<i className='fas fa-pen' />
			</button>
		</>
	)
}
