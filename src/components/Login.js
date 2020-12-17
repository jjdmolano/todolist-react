import { React, useState, useContext } from 'react'
import UserContext from '../UserContext'
import { useHistory } from 'react-router-dom'

export default function Login() {
    const { setUser } = useContext(UserContext)
    const [ username, setUsername ] = useState('')
    const history = useHistory()

    function userLogin(e) {
        e.preventDefault()
        setUser({
            id: username
        })
        history.push('/')
    }

    return(
        <section>
            <form>
                <div>
                    <label>Username</label>
                    <input type='text' value={username} onChange={e => setUsername(e.target.value)} required />
                </div>
                <button onClick={(e)=> userLogin(e)}>Login</button>
            </form>
        </section>
    )
}