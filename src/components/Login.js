import React, { useState, useContext } from 'react'
import UserContext from '../UserContext'
import { useHistory } from 'react-router-dom'
import styles from './Login.module.css'

export default function Login() {
	const { setUser } = useContext(UserContext)
	const [username, setUsername] = useState('')
	const history = useHistory()

	function userLogin(e) {
		e.preventDefault()
		setUser({
			id: username
		})
		history.push('/todo')
	}

	return (
		<main>
			<form className={styles.main}>
				<div>
					<label><h2>Username: </h2></label>
					<input
						type='text'
						value={username}
						onChange={e => setUsername(e.target.value)}
						required
					/>
				</div>
				<button onClick={e => userLogin(e)}><strong>LOGIN</strong></button>
			</form>
		</main>
	)
}   
