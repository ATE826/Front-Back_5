import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Отправляем запрос на сервер для авторизации
      const response = await axios.post('http://localhost:8080/api/login', {
        email,
        password,
      });

      // Сохраняем полученный токен в localStorage
      localStorage.setItem('token', response.data.token);

      // Перенаправляем пользователя на страницу профиля
      navigate('/profile');
    } catch (err) {
      // Обрабатываем ошибку при авторизации
      setError('Неверный email или пароль');
    }
  };

  return (
    <div className="login-container">
      <h2>Авторизация</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Пароль</label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit">Войти</button>
      </form>
    </div>
  );
};

export default Login;
