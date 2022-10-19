import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from '../Layout/Home/HomePage'
import LoginPage from '../Layout/Login/Login'
import LogoutPage from '../Layout/Logout/Logout'
import SettingsPage from '../Layout/Profile/Settings/Settings'
import UserProfilePage from '../Layout/Profile/UserProfile/UserProfile'
import { ProtectedRoute } from './ProtectedRoute/ProtectedRoute'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/logout" element={<ProtectedRoute >
                <LogoutPage/>
            </ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute />}        >
                <Route path="/profile/userProfile" element={<UserProfilePage />} />
                <Route path="/profile/settings" element={<SettingsPage />} />
            </Route>
            <Route path="*" element={<p>There's nothing here: 404!</p>} />
        </Routes>
    )
}

export default AppRoutes
