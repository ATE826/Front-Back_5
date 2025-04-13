package handlers

import "gorm.io/gorm"

type Server struct { // Структура для хранения экземпляра сервера и экземпляра базы данных
	db *gorm.DB
}

func NewServer(db *gorm.DB) *Server { // Функция для создания экземпляра сервера
	return &Server{db: db}
}
