import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container">
      <h2>Добро пожаловать!</h2>
      <p style={{ textAlign: 'center', marginBottom: '30px' }}>
        Это простое приложение с авторизацией через JWT.
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <Link to="/register">
          <button>Регистрация</button>
        </Link>
        <Link to="/login">
          <button>Войти</button>
        </Link>
        <Link to="/profile">
          <button>Профиль</button>
        </Link>
      </div>
    </div>
  )
}

export default Home
