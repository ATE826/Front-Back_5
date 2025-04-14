import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => (
  <div>
    <h1>Главная</h1>
    <Link to="/register">Регистрация</Link><br />
    <Link to="/profile">Профиль</Link> <br />
    <Link to="/login">Вход</Link>
  </div>
)

export default Home
