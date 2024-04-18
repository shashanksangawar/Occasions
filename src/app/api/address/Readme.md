
# API Requests


----------------------------------------------------------------------------------


###### 1. Add Address
http://localhost:3000/api/address/insert/
`POST`
```json
{
    "user_id": "auto-generated",
    "room":"Block No.101",
    "apartment":"Hornor Avenue",
    "road": "Stoneybrook Road",
    "landmark":"Silicon Valley",
    "city": "Tryon",
    "state": "Oklahoma",
    "country":"United States",
    "zip_code":"74875"
}
```

###### 2. Update Address
http://localhost:3000/api/address/update/address
`PUT`
```json
{
    "user_id": "auto-generated",
    "room":"Block No.101",
    "apartment":"Hornor Avenue",
    "road": "Stoneybrook Road",
    "landmark":"Silicon Valley",
    "city": "Tryon",
    "state": "Oklahoma",
    "country":"United States",
    "zip_code":"74875"
}
```


###### 3. Update Status of an Address
http://localhost:3000/api/address/update/status
`PUT`
```json
{
    "address_id": "auto-generated",
    "status":"Active"
}
```

###### 4. Address Delete(*To be used one time only*)
http://localhost:3000/api/address/delete/address
`DELETE`
```json
{
    "address_id":"auto-generated"
}
```

###### 5. Fetch Single Address
http://localhost:3000/api/address/fetch/address
`POST`
```json
{
    "username":"Appniche Technologies"
}
```

###### 6. Fetch a Single User's Address
http://localhost:3000/api/address/fetch/user
`POST`
```json
{
    "address_id":"auto-generated"
}
```

----------------------------------------------------------------------------------
