import { React, useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { UserProvider } from './UserContext'
import Home from './components/Home'
import Login from './components/Login'
import NavBar from './components/NavBar'
import ToDo from './components/ToDo'

function App() {

    const [ user, setUser ] = useState({
        id: null
    })

    const unsetUser = () => {
        localStorage.clear()
        setUser ({
            id: null
        })
    }

	return (
		<UserProvider value={{user, setUser, unsetUser}}>
			<NavBar />
			<Switch>
				<Route exact path='/'>
                    <Home />
                </Route>
				<Route exact path='/login'>
                    <Login />
                </Route>
				<Route exact path='/todo'>
                    <ToDo />
                </Route>
			</Switch>
		</UserProvider>
	)
}

ReactDOM.render(
	<BrowserRouter>
        <App />
    </BrowserRouter>,
	document.getElementById('root')
)
