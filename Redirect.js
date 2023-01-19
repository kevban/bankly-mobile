import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-native'
import LoadingPage from './components/LoadingPage';

const Redirect = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.auth.user)
    useEffect(() => {
        if (user) {
            if (!user.token) {
                navigate('/login')    
            } else {
                console.log('logged in')
                navigate('/transactions')
            }
        }
    }, [user])
    return <LoadingPage></LoadingPage>
}

export default Redirect