
# 🚀 Backend Structure


```yaml
/
├── api/
│   └── auth/
│       └── login/
│       └── register/
│       └── forgot_password/
│       └── account_delete/
│   └── address/
│       └── update/
│       └── insert/
│       └── delete/
│           └── address/
│       └── fetch/
│           └── address/
│           └── user/

```


# 🤖 MICROSERVICES API CALLS

----------------------------------------------------------------------------------

### Authentication 🔐

| Function                      | API Call                                               | Method            |
| :------------------------     | :-----------------------------------------------       |:------------------|
| `Login`                       |     http://localhost:3000/api/auth/login               |   `POST`          |
| `Register`                    |     http://localhost:3000/api/auth/register            |   `POST`          |
| `Account Delete`              |     http://localhost:3000/api/auth/account_delete      |   `DELETE`        |
| `Forgot Password`             |     http://localhost:3000/api/auth/forgot_password     |   `PUT`           |

----------------------------------------------------------------------------------


### Address 🏠

| Function                      | API Call                                               | Method            |
| :------------------------     | :-----------------------------------------------       |:------------------|
| `Insert Address`              |      http://localhost:3000/api/address/insert/         |   `POST`          |
| `Update Status`               |      http://localhost:3000/api/address/update/status   |   `PUT`           |
| `Update Address`              |      http://localhost:3000/api/address/update/address  |   `PUT`           |
| `Fetch Address`               |      http://localhost:3000/api/address/fetch/address   |   `POST`          |
| `Fetch User's all addresses`  |      http://localhost:3000/api/address/fetch/user      |   `POST`          |
| `Delete Address`              |      http://localhost:3000/api/address/delete/address  |   `DELETE`        |

----------------------------------------------------------------------------------