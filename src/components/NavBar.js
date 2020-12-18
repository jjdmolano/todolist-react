import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../UserContext'
import styles from './NavBar.module.css'

export default function NavBar() {
	const { user, unsetUser } = useContext(UserContext)

	return (
		<nav>
			<ul className={styles.navbar}>
				<li>
					<Link to='/'>Home</Link>
				</li>
				{user.id === null ? (
					<li>
						<Link to='login'>Login</Link>
					</li>
				) : (
					<>
						<li>
							<Link to='/todo'>List</Link>
						</li>
						<li>
							<Link to='/login' onClick={unsetUser}>
								Logout
							</Link>
						</li>
					</>
				)}
			</ul>
		</nav>
	)
}
