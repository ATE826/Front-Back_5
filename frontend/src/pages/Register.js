import React, { useState } from 'react'
import axios from 'axios'

const Register = () => {
  const [form, setForm] = useState({
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  })

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:8080/api/register', form)
      alert('Регистрация успешна!')
    } catch (err) {
      alert('Ошибка регистрации')
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Регистрация</h2>
      <input name="first_name" placeholder="Имя" onChange={handleChange} /><br />
      <input name="last_name" placeholder="Фамилия" onChange={handleChange} /><br />
      <input name="email" placeholder="Email" onChange={handleChange} /><br />
      <input name="password" placeholder="Пароль" type="password" onChange={handleChange} /><br />
      <button type="submit">Зарегистрироваться</button>
    </form>
  )
}

export default Register
