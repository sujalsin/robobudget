package models

import (
	"time"
)

// Category represents an expense category
type Category struct {
	ID          string    `json:"id" bson:"_id"`
	Name        string    `json:"name" bson:"name"`
	Description string    `json:"description" bson:"description"`
	CreatedAt   time.Time `json:"created_at" bson:"created_at"`
	UpdatedAt   time.Time `json:"updated_at" bson:"updated_at"`
}

// Expense represents a single expense transaction
type Expense struct {
	ID          string    `json:"id" bson:"_id"`
	UserID      string    `json:"user_id" bson:"user_id"`
	Amount      float64   `json:"amount" bson:"amount"`
	CategoryID  string    `json:"category_id" bson:"category_id"`
	Description string    `json:"description" bson:"description"`
	Date        time.Time `json:"date" bson:"date"`
	CreatedAt   time.Time `json:"created_at" bson:"created_at"`
	UpdatedAt   time.Time `json:"updated_at" bson:"updated_at"`
}

// Budget represents a user's budget plan
type Budget struct {
	ID         string             `json:"id" bson:"_id"`
	UserID     string            `json:"user_id" bson:"user_id"`
	Month      time.Time         `json:"month" bson:"month"`
	Limits     map[string]float64 `json:"limits" bson:"limits"` // CategoryID -> Amount
	CreatedAt  time.Time         `json:"created_at" bson:"created_at"`
	UpdatedAt  time.Time         `json:"updated_at" bson:"updated_at"`
}

// BudgetAnalytics represents analytics data for a budget period
type BudgetAnalytics struct {
	ID            string             `json:"id" bson:"_id"`
	UserID        string            `json:"user_id" bson:"user_id"`
	Month         time.Time         `json:"month" bson:"month"`
	TotalSpent    float64           `json:"total_spent" bson:"total_spent"`
	CategorySpent map[string]float64 `json:"category_spent" bson:"category_spent"`
	Savings       float64           `json:"savings" bson:"savings"`
	CreatedAt     time.Time         `json:"created_at" bson:"created_at"`
}
