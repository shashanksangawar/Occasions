
# API Requests


----------------------------------------------------------------------------------


###### 1. Login
http://localhost:3000/api/student/login
`POST`
```json
{
    "username":"student",
    "password":"user@123"
}
```

###### 2. Register (*To be used one time only*)
http://localhost:3000/api/student/register
`POST`
```json
{
    "username":"user",
    "email":"user@gmail.com",
    "password":"user@123",
}
```


###### 3. Forgot Password
http://localhost:3000/api/auth/forgot_password
`PUT`
```json
{
    "username": "user",
    "password":"user@123",
    "new_password": "user@#123"
}
```

###### 4. Account Delete(*To be used one time only*)
http://localhost:3000/api/auth/account_delete
`DELETE`
```json
{
    "user_id": "auto-generated"
}
```


----------------------------------------------------------------------------------
