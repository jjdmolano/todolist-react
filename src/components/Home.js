import React, { useContext } from 'react'
import UserContext from '../UserContext'
import { Link } from 'react-router-dom'
import styles from './Home.module.css'

export default function Home() {
	const { user } = useContext(UserContext)

	return (
		<main className={styles.main}>
			<h1>React To-Do List</h1>
			{user.id === null ? (
                <>
                <h2>You must login first to view the list.</h2>
				<button>
					<Link to='/login'><strong>LOGIN</strong></Link>
				</button>
                </>
			) : (
                <>
                <h2>You are logged in.</h2>
				<button>
					<Link to='/todo'><strong>View To-Do List</strong></Link>
				</button>
                </>
			)}
		</main>
	)
}
