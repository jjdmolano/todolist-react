import { useContext, useEffect } from 'react'
import UserContext from '../UserContext'
import Redirect from 'react-router-dom'

export default function Logout() {
    const { unsetUser } = useContext(UserContext)

    useEffect(()=> {
       unsetUser()
       <Redirect to='/' />
    },[])
    return null
}