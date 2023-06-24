import React from 'react'
import { Routes, Route } from 'react-router-dom'
import App from './App'
import { RouterLayout } from './components/RouterLayout'
import Home from './pages/Home'
import User from './pages/User'

const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<RouterLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/user/:userId' element={<User />} />
            </Route>
        </Routes>
    )
}

export default AppRouter