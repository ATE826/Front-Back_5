import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Profile = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')  // Получаем токен из localStorage
    if (!token) {
      console.log('Токен не найден')
      return
    }

    axios.get('http://localhost:8080/user/', {
      headers: { Authorization: `Bearer ${token}` }  // ОБЯЗАТЕЛЬНО в бэктиках
    })
    .then(res => {
      setUser(res.data.user)
    })
    .catch(err => {
      console.error('Ошибка получения профиля:', err)
    })
  }, [])

  const handleRedirect = () => {
    window.location.href = 'https://www.youtube.com'
  }

  if (!user) return <p>Загрузка...</p>

  return (
    <div>
      <h2>Профиль</h2>
      <p>Имя: {user.first_name}</p>
      <p>Фамилия: {user.last_name}</p>
      <p>Email: {user.email}</p>

      <button onClick={handleRedirect} style={{ marginTop: '20px' }}>
        Перейти на YouTube
      </button>
    </div>
  )
}

export default Profile
