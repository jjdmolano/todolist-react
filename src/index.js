import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Home'
import Login from './components/Login'
import NavBar from './components/NavBar'
import ToDo from './components/ToDo'

ReactDOM.render(
  <BrowserRouter>
    <NavBar/>
    <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/todo" component={ToDo}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)