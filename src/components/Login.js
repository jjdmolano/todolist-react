import React, { useState, useContext } from 'react'
import UserContext from '../UserContext'
import { useHistory } from 'react-router-dom'
import styles from './Login.module.css'

export default function Login() {
	const { setUser } = useContext(UserContext)
	const [username, setUsername] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(false)
	const history = useHistory()

	function userLogin(e) {
		e.preventDefault()

		fetch('http://localhost:4000/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				id: username,
				password: password
			})
		})
			.then(res => res.json())
			.then(data => {
				if (data === false) {
					setError(true)
				} else {
					setError(false)
					setUser({
						id: data.id
					})
					history.push('/todo')
				}
			})
	}

	return (
		<main>
			<form className={styles.main}>
				<div>
					<label>
						<h2>Username: </h2>
					</label>
					<input
						type='text'
						value={username}
						onChange={e => setUsername(e.target.value)}
						required
					/>
				</div>
				<div>
					<label>
						<h2>Password: </h2>
					</label>
					<input
						type='password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						required
					/>
				</div>
				<button onClick={e => userLogin(e)}>
					<strong>LOGIN</strong>
				</button>
				{error ? <h3>Login failed. Please try again.</h3> : null}
			</form>
		</main>
	)
}
