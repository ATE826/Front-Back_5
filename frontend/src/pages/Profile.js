import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../App.css'

const Profile = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      console.log('Токен не найден')
      return
    }

    axios.get('http://localhost:8080/user/profile', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => {
      setUser(res.data.user)
    })
    .catch(err => {
      console.error('Ошибка получения профиля:', err)
    })
  }, [])

  const handleRedirect = () => {
    window.open('https://www.youtube.com', '_blank')
  }

  const handleGoHome = () => {
    navigate('/')
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    navigate('/login')
  }

  if (!user) return <p className="loading">Загрузка...</p>

  return (
    <div className="container">
      <h2>Профиль пользователя</h2>
      <div className="profile-card">
        <p><strong>Имя:</strong> {user.first_name}</p>
        <p><strong>Фамилия:</strong> {user.last_name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <div className="button-row">
          <button onClick={handleRedirect}>Перейти на YouTube</button>
          <button onClick={handleGoHome} className="gray-btn">На главную</button>
          <button onClick={handleLogout} className="logout-btn">Выйти</button>
        </div>
      </div>
    </div>
  )
}

export default Profile
