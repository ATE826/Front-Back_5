import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../App.css'

const Profile = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      console.log('Токен не найден')
      return
    }

    axios.get('http://localhost:8080/user/', {
      headers: { Authorization: `Bearer ${token}` }
    })
    .then(res => {
      setUser(res.data.user)
    })
    .catch(err => {
      console.error('Ошибка получения профиля:', err)
    })
  }, [])

  if (!user) return <p className="loading">Загрузка...</p>

  const handleRedirect = () => {
    window.open('https://www.youtube.com', '_blank')
  }

  return (
    <div className="container">
      <h2>Профиль пользователя</h2>
      <div className="profile-card">
        <p><strong>Имя:</strong> {user.first_name}</p>
        <p><strong>Фамилия:</strong> {user.last_name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <button onClick={handleRedirect}>Перейти на YouTube</button>
      </div>
    </div>
  )
}

export default Profile
