# API Documentation

## Overview

This document outlines the API structure for FairRecAi - the Fairness-Aware Movie Recommendation System. While the current implementation uses mock data, this serves as a blueprint for backend integration.

## Authentication Endpoints

### POST /api/auth/login
Login user with email and password.

**Request Body:**
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

**Response:**
```json
{
  "user": {
    "id": "user_id",
    "email": "user@example.com",
    "name": "User Name",
    "role": "user|admin"
  },
  "token": "jwt_token"
}
```

### POST /api/auth/register
Register new user account.

**Request Body:**
```json
{
  "name": "User Name",
  "email": "user@example.com",
  "password": "password123",
  "age": 25,
  "gender": "female",
  "occupation": "Engineer",
  "preferences": ["Action", "Sci-Fi"]
}
```

## Movie Endpoints

### GET /api/movies
Retrieve movies with optional filtering.

**Query Parameters:**
- `genre`: Filter by genre
- `year`: Filter by release year
- `search`: Search by title or director
- `page`: Pagination
- `limit`: Items per page

**Response:**
```json
{
  "movies": [
    {
      "id": "movie_id",
      "title": "Movie Title",
      "genre": ["Action", "Sci-Fi"],
      "year": 2023,
      "rating": 8.5,
      "description": "Movie description",
      "poster": "poster_url",
      "director": "Director Name",
      "cast": ["Actor 1", "Actor 2"]
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 100
  }
}
```

### POST /api/movies/{id}/rate
Rate a movie.

**Request Body:**
```json
{
  "rating": 4.5
}
```

## Recommendation Endpoints

### GET /api/recommendations
Get personalized recommendations for authenticated user.

**Response:**
```json
{
  "recommendations": [
    {
      "movie": {
        "id": "movie_id",
        "title": "Movie Title",
        // ... movie details
      },
      "score": 0.92,
      "fairnessScore": 0.85,
      "biasComponents": {
        "biasAware": 0.25,
        "biasFree": 0.75
      },
      "reasoning": "AI reasoning explanation"
    }
  ],
  "fairnessMetrics": {
    "overallFairness": 0.84,
    "genderBias": 0.15,
    "ageBias": 0.20,
    "occupationBias": 0.18,
    "diversityScore": 0.76
  }
}
```

## Admin Endpoints

### GET /api/admin/metrics
Get system-wide fairness and performance metrics.

**Response:**
```json
{
  "systemStats": {
    "totalUsers": 1250,
    "totalMovies": 5000,
    "totalRatings": 45000,
    "systemHealth": 0.982
  },
  "fairnessMetrics": {
    "overallFairness": 0.84,
    "biasMetrics": {
      "genderBias": 0.15,
      "ageBias": 0.20,
      "occupationBias": 0.18
    }
  },
  "userDemographics": {
    "gender": {
      "male": 520,
      "female": 680,
      "other": 50
    },
    "ageGroups": {
      "18-25": 300,
      "26-35": 450,
      "36-50": 350,
      "50+": 150
    }
  }
}
```

### GET /api/admin/training-logs
Get recent AI model training logs.

**Response:**
```json
{
  "logs": [
    {
      "timestamp": "2025-01-20T10:30:00Z",
      "type": "adversarial_training",
      "message": "Epoch 1247 completed - discriminator accuracy: 18.3%",
      "level": "info"
    },
    {
      "timestamp": "2025-01-20T10:25:00Z",
      "type": "orthogonality",
      "message": "Orthogonality regularization loss decreased to 0.0023",
      "level": "success"
    }
  ]
}
```

## Error Responses

All endpoints return consistent error responses:

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable error message",
    "details": "Additional error details if available"
  }
}
```

## Status Codes

- `200`: Success
- `201`: Created
- `400`: Bad Request
- `401`: Unauthorized
- `403`: Forbidden
- `404`: Not Found
- `500`: Internal Server Error

## Rate Limiting

- Authentication endpoints: 5 requests per minute
- General API endpoints: 100 requests per minute
- Admin endpoints: 50 requests per minute

## Authentication

All protected endpoints require a JWT token in the Authorization header:

```
Authorization: Bearer <jwt_token>
```