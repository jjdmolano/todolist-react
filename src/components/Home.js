import { React, useContext } from 'react'
import UserContext from '../UserContext'

export default function Home() {
    const { user } = useContext(UserContext)

    return (
		<main>
			<div>HELLO, {user.id}</div>
        </main>
	)
}