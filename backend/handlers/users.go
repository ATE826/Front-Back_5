package handlers

import (
	"front-back_5/models"
	"net/http"

	"github.com/gin-gonic/gin"
)

func (s *Server) GetCurrentUser(c *gin.Context) {
	userId, exists := c.Get("user_id")
	if !exists {
		c.JSON(http.StatusUnauthorized, gin.H{"error": "Unauthorized"})
		return
	}

	var user models.User

	// Подгружаем курсы и тесты в курсах
	if err := s.db.Preload("Courses.Test").First(&user, userId).Error; err != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "User not found"})
		return
	}

	// Не возвращаем пароль
	user.Password = ""

	c.JSON(http.StatusOK, gin.H{"user": user})
}

type UserUpdateInput struct {
	FirstName  string `json:"first_name"`
	LastName   string `json:"last_name"`
	Patronymic string `json:"patronymic"`
	City       string `json:"city"`
	Birthday   string `json:"birthday"`
	Email      string `json:"email"`
	Password   string `json:"password"` // Если новый пароль передается
}
