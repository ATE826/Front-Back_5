import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Profile = () => {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) return

    axios.get('http://localhost:8080/user/', {
      headers: { Authorization: `Bearer ${token}` }
    }).then(res => {
      setUser(res.data.user)
    }).catch(err => {
      console.error('Ошибка получения профиля:', err)
    })
  }, [])

  if (!user) return <p>Загрузка...</p>

  return (
    <div>
      <h2>Профиль</h2>
      <p>Имя: {user.first_name}</p>
      <p>Фамилия: {user.last_name}</p>
      <p>Email: {user.email}</p>
    </div>
  )
}

export default Profile
