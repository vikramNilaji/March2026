# VaultHub API

Base URL:

```text
https://vaulthub-xm1r.onrender.com
```

Local URL:

```text
http://localhost:5000
```

Protected routes require:

```http
Authorization: Bearer <jwt_token>
```

## Health

| Method | Route | Description |
| --- | --- | --- |
| GET | `/` | Confirms the backend is live. |

## Authentication

### Sign Up

```http
POST /signup
Content-Type: application/json
```

Request:

```json
{
  "name": "Vikram C. Nilaji",
  "email": "vik.nilaji@gmail.com",
  "password": "secure-password"
}
```

Success response:

```json
{
  "message": "User registered successfully",
  "token": "jwt_token"
}
```

### Sign In

```http
POST /signin
Content-Type: application/json
```

Request:

```json
{
  "email": "vik.nilaji@gmail.com",
  "password": "secure-password"
}
```

Success response:

```json
{
  "message": "Login successful",
  "token": "jwt_token",
  "user": {
    "id": "user_id",
    "name": "Vikram C. Nilaji",
    "email": "vik.nilaji@gmail.com"
  }
}
```

## Expenses

### Add Expense

```http
POST /api/expenses/add
Authorization: Bearer <jwt_token>
Content-Type: application/json
```

Request:

```json
{
  "title": "Cricket Kit",
  "amount": 2500,
  "category": "Sports",
  "date": "2026-05-29"
}
```

### Get User Expenses

```http
GET /api/expenses/user
Authorization: Bearer <jwt_token>
```

Returns the signed-in user's expense list.

### Get Total Expenses

```http
GET /api/expenses/total
Authorization: Bearer <jwt_token>
```

Returns the signed-in user's total expense amount.

### Update Expense

```http
PUT /api/expenses/update/:id
Authorization: Bearer <jwt_token>
Content-Type: application/json
```

Request:

```json
{
  "title": "Updated title",
  "amount": 3000
}
```

### Delete Expense

```http
DELETE /api/expenses/delete/:id
Authorization: Bearer <jwt_token>
```

Deletes the selected expense for the signed-in user.
