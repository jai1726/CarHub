const addCar=async(req,res,next)=>{

    const data={
        "info": {
            "_postman_id": "33c121d5-e5d6-483a-acef-77ed1e6e613e",
            "name": "CarHub Documentation",
            "description": "# CarHub APIs\n\n## 🔖Overview\n\n- CarHub API allows users to manage car listings. Users can create, view, update, and delete car listings. Authentication is required for most actions, ensuring only authorized users can manage their listings.EndFragment\n    \n\n## Authentication End\n\n- All routes requiring authentication must include the `Authorization` header with a valid JWT token\n    \n\n**Authorization: Bearer**",
            "schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
            "_exporter_id": "37026628",
            "_collection_link": "https://web-d-sainyam.postman.co/workspace/b09a0446-9a29-4ad0-ae3c-f2546084ece1/collection/37026628-33c121d5-e5d6-483a-acef-77ed1e6e613e?action=share&source=collection_link&creator=37026628"
        },
        "item": [
            {
                "name": "Non-Auth",
                "item": [
                    {
                        "name": "signup",
                        "request": {
                            "method": "POST",
                            "header": [],
                            "body": {
                                "mode": "raw",
                                "raw": "{\r\n    \"email\": \"vaun@gmail.com\",\r\n    \"name\":\"varun\",\r\n    \"password\":\"123456\"\r\n}",
                                "options": {
                                    "raw": {
                                        "language": "json"
                                    }
                                }
                            },
                            "url": {
                                "raw": "http://localhost:5000/api/user/signup",
                                "protocol": "http",
                                "host": [
                                    "localhost"
                                ],
                                "port": "5000",
                                "path": [
                                    "api",
                                    "user",
                                    "signup"
                                ]
                            },
                            "description": "creates User"
                        },
                        "response": [
                            {
                                "name": "signup",
                                "originalRequest": {
                                    "method": "POST",
                                    "header": [],
                                    "body": {
                                        "mode": "raw",
                                        "raw": "{\r\n    \"email\": \"anu@gmail.com\",\r\n    \"name\":\"jai\",\r\n    \"password\":\"123456\"\r\n}",
                                        "options": {
                                            "raw": {
                                                "language": "json"
                                            }
                                        }
                                    },
                                    "url": {
                                        "raw": "http://localhost:5000/api/user/signup",
                                        "protocol": "http",
                                        "host": [
                                            "localhost"
                                        ],
                                        "port": "5000",
                                        "path": [
                                            "api",
                                            "user",
                                            "signup"
                                        ]
                                    }
                                },
                                "status": "OK",
                                "code": 200,
                                "_postman_previewlanguage": "json",
                                "header": [
                                    {
                                        "key": "X-Powered-By",
                                        "value": "Express"
                                    },
                                    {
                                        "key": "Access-Control-Allow-Origin",
                                        "value": "*"
                                    },
                                    {
                                        "key": "Content-Type",
                                        "value": "application/json; charset=utf-8"
                                    },
                                    {
                                        "key": "Content-Length",
                                        "value": "172"
                                    },
                                    {
                                        "key": "ETag",
                                        "value": "W/\"ac-PGqbSZJq9GpJKb9SjXC7ZAxc6Bs\""
                                    },
                                    {
                                        "key": "Date",
                                        "value": "Fri, 15 Nov 2024 11:45:56 GMT"
                                    },
                                    {
                                        "key": "Connection",
                                        "value": "keep-alive"
                                    },
                                    {
                                        "key": "Keep-Alive",
                                        "value": "timeout=5"
                                    }
                                ],
                                "cookie": [],
                                "body": "{\n    \"user\": {\n        \"email\": \"anu@gmail.com\",\n        \"name\": \"jai\",\n        \"password\": \"$2b$10$djwlZGDcAC633Pj7Fe4xLuaCZ7kidKykt02yP9VsGnLtWEiw3pjcy\",\n        \"cars\": [],\n        \"_id\": \"673734741e0126fe3735fbc8\",\n        \"__v\": 0\n    }\n}"
                            }
                        ]
                    },
                    {
                        "name": "login",
                        "request": {
                            "method": "POST",
                            "header": [],
                            "body": {
                                "mode": "raw",
                                "raw": "{\r\n    \"email\": \"anu@gmail.com\",\r\n    \"password\":\"123456\"\r\n}",
                                "options": {
                                    "raw": {
                                        "language": "json"
                                    }
                                }
                            },
                            "url": {
                                "raw": "http://localhost:5000/api/user/login",
                                "protocol": "http",
                                "host": [
                                    "localhost"
                                ],
                                "port": "5000",
                                "path": [
                                    "api",
                                    "user",
                                    "login"
                                ]
                            },
                            "description": "helps to login uing email anjd password"
                        },
                        "response": [
                            {
                                "name": "login",
                                "originalRequest": {
                                    "method": "POST",
                                    "header": [],
                                    "body": {
                                        "mode": "raw",
                                        "raw": "{\r\n    \"email\": \"anu@gmail.com\",\r\n    \"password\":\"123456\"\r\n}",
                                        "options": {
                                            "raw": {
                                                "language": "json"
                                            }
                                        }
                                    },
                                    "url": {
                                        "raw": "http://localhost:5000/api/user/login",
                                        "protocol": "http",
                                        "host": [
                                            "localhost"
                                        ],
                                        "port": "5000",
                                        "path": [
                                            "api",
                                            "user",
                                            "login"
                                        ]
                                    }
                                },
                                "status": "OK",
                                "code": 200,
                                "_postman_previewlanguage": "json",
                                "header": [
                                    {
                                        "key": "X-Powered-By",
                                        "value": "Express"
                                    },
                                    {
                                        "key": "Access-Control-Allow-Origin",
                                        "value": "*"
                                    },
                                    {
                                        "key": "Content-Type",
                                        "value": "application/json; charset=utf-8"
                                    },
                                    {
                                        "key": "Content-Length",
                                        "value": "249"
                                    },
                                    {
                                        "key": "ETag",
                                        "value": "W/\"f9-rxkSwEvPHvqNl7bgArnXznqXnoA\""
                                    },
                                    {
                                        "key": "Date",
                                        "value": "Fri, 15 Nov 2024 11:47:58 GMT"
                                    },
                                    {
                                        "key": "Connection",
                                        "value": "keep-alive"
                                    },
                                    {
                                        "key": "Keep-Alive",
                                        "value": "timeout=5"
                                    }
                                ],
                                "cookie": [],
                                "body": "{\n    \"message\": \"login Successful\",\n    \"token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzM3MzQ3NDFlMDEyNmZlMzczNWZiYzgiLCJlbWFpbCI6ImFudUBnbWFpbC5jb20iLCJpYXQiOjE3MzE2NzEyNzgsImV4cCI6MTczMTY3NDg3OH0.DAuh2FMjZ3ukKXS6szOGLue1RNxSCk_jiIi_AuCPFPg\"\n}"
                            }
                        ]
                    }
                ],
                "description": "The `/me` endpoints let you manage information about the authenticated user."
            },
            {
                "name": "Auth",
                "item": [
                    {
                        "name": "AddCarby User",
                        "request": {
                            "auth": {
                                "type": "bearer",
                                "bearer": [
                                    {
                                        "key": "token",
                                        "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzM3MzQ3NDFlMDEyNmZlMzczNWZiYzgiLCJlbWFpbCI6ImFudUBnbWFpbC5jb20iLCJpYXQiOjE3MzE2NzEyNzgsImV4cCI6MTczMTY3NDg3OH0.DAuh2FMjZ3ukKXS6szOGLue1RNxSCk_jiIi_AuCPFPg",
                                        "type": "string"
                                    }
                                ]
                            },
                            "method": "POST",
                            "header": [],
                            "body": {
                                "mode": "formdata",
                                "formdata": [
                                    {
                                        "key": "tittle",
                                        "value": " Car10",
                                        "type": "text"
                                    },
                                    {
                                        "key": "description",
                                        "value": " A high-performance sports car for the adrenaline junkies.",
                                        "type": "text"
                                    },
                                    {
                                        "key": "car_type",
                                        "value": " Sports Car",
                                        "type": "text"
                                    },
                                    {
                                        "key": "company",
                                        "value": " Porsche",
                                        "type": "text"
                                    },
                                    {
                                        "key": "dealer",
                                        "value": " SpeedX Autos",
                                        "type": "text"
                                    },
                                    {
                                        "key": "color",
                                        "value": " Red",
                                        "type": "text"
                                    },
                                    {
                                        "key": "price_range",
                                        "value": " High",
                                        "type": "text"
                                    },
                                    {
                                        "key": "images",
                                        "type": "file",
                                        "src": "postman-cloud:///1efa2da0-51f6-4ad0-a0b7-8e14b6938f27"
                                    },
                                    {
                                        "key": "images",
                                        "type": "file",
                                        "src": "postman-cloud:///1efa2da0-ee84-4cd0-abed-474ab7fb17e2"
                                    }
                                ]
                            },
                            "url": {
                                "raw": "http://localhost:5000/api/car/addCar",
                                "protocol": "http",
                                "host": [
                                    "localhost"
                                ],
                                "port": "5000",
                                "path": [
                                    "api",
                                    "car",
                                    "addCar"
                                ]
                            },
                            "description": "### Description:\n\nRetrieves all cars listed by the authenticated user."
                        },
                        "response": [
                            {
                                "name": "addCar",
                                "originalRequest": {
                                    "method": "POST",
                                    "header": [],
                                    "body": {
                                        "mode": "formdata",
                                        "formdata": [
                                            {
                                                "key": "tittle",
                                                "value": " Car10",
                                                "type": "text"
                                            },
                                            {
                                                "key": "description",
                                                "value": " A high-performance sports car for the adrenaline junkies.",
                                                "type": "text"
                                            },
                                            {
                                                "key": "car_type",
                                                "value": " Sports Car",
                                                "type": "text"
                                            },
                                            {
                                                "key": "company",
                                                "value": " Porsche",
                                                "type": "text"
                                            },
                                            {
                                                "key": "dealer",
                                                "value": " SpeedX Autos",
                                                "type": "text"
                                            },
                                            {
                                                "key": "color",
                                                "value": " Red",
                                                "type": "text"
                                            },
                                            {
                                                "key": "price_range",
                                                "value": " High",
                                                "type": "text"
                                            },
                                            {
                                                "key": "images",
                                                "type": "file",
                                                "src": "postman-cloud:///1efa2da0-51f6-4ad0-a0b7-8e14b6938f27"
                                            },
                                            {
                                                "key": "images",
                                                "type": "file",
                                                "src": "postman-cloud:///1efa2da0-ee84-4cd0-abed-474ab7fb17e2"
                                            }
                                        ]
                                    },
                                    "url": {
                                        "raw": "http://localhost:5000/api/car/addCar",
                                        "protocol": "http",
                                        "host": [
                                            "localhost"
                                        ],
                                        "port": "5000",
                                        "path": [
                                            "api",
                                            "car",
                                            "addCar"
                                        ]
                                    }
                                },
                                "status": "OK",
                                "code": 200,
                                "_postman_previewlanguage": "json",
                                "header": [
                                    {
                                        "key": "X-Powered-By",
                                        "value": "Express"
                                    },
                                    {
                                        "key": "Access-Control-Allow-Origin",
                                        "value": "*"
                                    },
                                    {
                                        "key": "Content-Type",
                                        "value": "application/json; charset=utf-8"
                                    },
                                    {
                                        "key": "Content-Length",
                                        "value": "510"
                                    },
                                    {
                                        "key": "ETag",
                                        "value": "W/\"1fe-jO8iOnaxegRFrJzG8wPO+WNSOS0\""
                                    },
                                    {
                                        "key": "Date",
                                        "value": "Fri, 15 Nov 2024 11:51:40 GMT"
                                    },
                                    {
                                        "key": "Connection",
                                        "value": "keep-alive"
                                    },
                                    {
                                        "key": "Keep-Alive",
                                        "value": "timeout=5"
                                    }
                                ],
                                "cookie": [],
                                "body": "{\n    \"car\": {\n        \"tittle\": \" Car10\",\n        \"description\": \" A high-performance sports car for the adrenaline junkies.\",\n        \"images\": [\n            \"https://res.cloudinary.com/dkfgcfqn2/image/upload/v1731671498/Dynamic%20folders/lfvil7aeeyfkq00giwhg.jpg\",\n            \"https://res.cloudinary.com/dkfgcfqn2/image/upload/v1731671500/Dynamic%20folders/fqlg00rukurj8j7kw7g2.jpg\"\n        ],\n        \"car_type\": \" Sports Car\",\n        \"company\": \" Porsche\",\n        \"dealer\": \" SpeedX Autos\",\n        \"color\": \" Red\",\n        \"price_range\": \" High\",\n        \"user\": \"673734741e0126fe3735fbc8\",\n        \"_id\": \"673735cc1e0126fe3735fbcd\",\n        \"__v\": 0\n    }\n}"
                            }
                        ]
                    },
                    {
                        "name": "Deleting the car",
                        "request": {
                            "auth": {
                                "type": "bearer",
                                "bearer": [
                                    {
                                        "key": "token",
                                        "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzM3MzQ3NDFlMDEyNmZlMzczNWZiYzgiLCJlbWFpbCI6ImFudUBnbWFpbC5jb20iLCJpYXQiOjE3MzE2NzEyNzgsImV4cCI6MTczMTY3NDg3OH0.DAuh2FMjZ3ukKXS6szOGLue1RNxSCk_jiIi_AuCPFPg",
                                        "type": "string"
                                    }
                                ]
                            },
                            "method": "DELETE",
                            "header": [],
                            "url": {
                                "raw": "http://localhost:5000/api/car/delete/67367d2661297d499b8eb786",
                                "protocol": "http",
                                "host": [
                                    "localhost"
                                ],
                                "port": "5000",
                                "path": [
                                    "api",
                                    "car",
                                    "delete",
                                    "67367d2661297d499b8eb786"
                                ]
                            },
                            "description": "Deletes a car listing by its ID."
                        },
                        "response": [
                            {
                                "name": "deleting the car",
                                "originalRequest": {
                                    "method": "DELETE",
                                    "header": [],
                                    "url": {
                                        "raw": "http://localhost:5000/api/car/delete/67367d2661297d499b8eb786",
                                        "protocol": "http",
                                        "host": [
                                            "localhost"
                                        ],
                                        "port": "5000",
                                        "path": [
                                            "api",
                                            "car",
                                            "delete",
                                            "67367d2661297d499b8eb786"
                                        ]
                                    }
                                },
                                "status": "OK",
                                "code": 200,
                                "_postman_previewlanguage": "json",
                                "header": [
                                    {
                                        "key": "X-Powered-By",
                                        "value": "Express"
                                    },
                                    {
                                        "key": "Access-Control-Allow-Origin",
                                        "value": "*"
                                    },
                                    {
                                        "key": "Content-Type",
                                        "value": "application/json; charset=utf-8"
                                    },
                                    {
                                        "key": "Content-Length",
                                        "value": "34"
                                    },
                                    {
                                        "key": "ETag",
                                        "value": "W/\"22-6IoHKe6F3f/OkIETcx9tUl8GbxM\""
                                    },
                                    {
                                        "key": "Date",
                                        "value": "Fri, 15 Nov 2024 11:54:16 GMT"
                                    },
                                    {
                                        "key": "Connection",
                                        "value": "keep-alive"
                                    },
                                    {
                                        "key": "Keep-Alive",
                                        "value": "timeout=5"
                                    }
                                ],
                                "cookie": [],
                                "body": "{\n    \"message\": \"Successfully deleted\"\n}"
                            }
                        ]
                    },
                    {
                        "name": "Updating the Car",
                        "request": {
                            "auth": {
                                "type": "bearer",
                                "bearer": [
                                    {
                                        "key": "token",
                                        "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzM3MzQ3NDFlMDEyNmZlMzczNWZiYzgiLCJlbWFpbCI6ImFudUBnbWFpbC5jb20iLCJpYXQiOjE3MzE2NzEyNzgsImV4cCI6MTczMTY3NDg3OH0.DAuh2FMjZ3ukKXS6szOGLue1RNxSCk_jiIi_AuCPFPg",
                                        "type": "string"
                                    }
                                ]
                            },
                            "method": "PUT",
                            "header": [],
                            "body": {
                                "mode": "formdata",
                                "formdata": [
                                    {
                                        "key": "tittle",
                                        "value": " Car100",
                                        "type": "text"
                                    },
                                    {
                                        "key": "description",
                                        "value": " A high-performance sports car for the adrenaline junkies.",
                                        "type": "text"
                                    },
                                    {
                                        "key": "car_type",
                                        "value": " Updated Sports Car",
                                        "type": "text"
                                    },
                                    {
                                        "key": "company",
                                        "value": " Porsche",
                                        "type": "text"
                                    },
                                    {
                                        "key": "dealer",
                                        "value": " SpeedX Autos",
                                        "type": "text"
                                    },
                                    {
                                        "key": "color",
                                        "value": " Red",
                                        "type": "text"
                                    },
                                    {
                                        "key": "price_range",
                                        "value": " High",
                                        "type": "text"
                                    },
                                    {
                                        "key": "images",
                                        "type": "file",
                                        "src": "postman-cloud:///1efa3497-2a85-47f0-88cf-2af688af2ea8"
                                    },
                                    {
                                        "key": "images",
                                        "type": "file",
                                        "src": "postman-cloud:///1efa2d88-e78e-4ce0-a373-13e0e896b064"
                                    }
                                ]
                            },
                            "url": {
                                "raw": "http://localhost:5000/api/car/updateCar/673735cc1e0126fe3735fbcd",
                                "protocol": "http",
                                "host": [
                                    "localhost"
                                ],
                                "port": "5000",
                                "path": [
                                    "api",
                                    "car",
                                    "updateCar",
                                    "673735cc1e0126fe3735fbcd"
                                ]
                            },
                            "description": "by calling this api request using token, it willupdate the details of cars and images."
                        },
                        "response": [
                            {
                                "name": "Updating the Car",
                                "originalRequest": {
                                    "method": "PUT",
                                    "header": [],
                                    "body": {
                                        "mode": "formdata",
                                        "formdata": [
                                            {
                                                "key": "tittle",
                                                "value": " Car100",
                                                "type": "text"
                                            },
                                            {
                                                "key": "description",
                                                "value": " A high-performance sports car for the adrenaline junkies.",
                                                "type": "text"
                                            },
                                            {
                                                "key": "car_type",
                                                "value": " Updated Sports Car",
                                                "type": "text"
                                            },
                                            {
                                                "key": "company",
                                                "value": " Porsche",
                                                "type": "text"
                                            },
                                            {
                                                "key": "dealer",
                                                "value": " SpeedX Autos",
                                                "type": "text"
                                            },
                                            {
                                                "key": "color",
                                                "value": " Red",
                                                "type": "text"
                                            },
                                            {
                                                "key": "price_range",
                                                "value": " High",
                                                "type": "text"
                                            },
                                            {
                                                "key": "images",
                                                "type": "file",
                                                "src": "postman-cloud:///1efa3497-2a85-47f0-88cf-2af688af2ea8"
                                            },
                                            {
                                                "key": "images",
                                                "type": "file",
                                                "src": "postman-cloud:///1efa2d88-e78e-4ce0-a373-13e0e896b064"
                                            }
                                        ]
                                    },
                                    "url": {
                                        "raw": "http://localhost:5000/api/car/updateCar/673735cc1e0126fe3735fbcd",
                                        "protocol": "http",
                                        "host": [
                                            "localhost"
                                        ],
                                        "port": "5000",
                                        "path": [
                                            "api",
                                            "car",
                                            "updateCar",
                                            "673735cc1e0126fe3735fbcd"
                                        ]
                                    }
                                },
                                "status": "OK",
                                "code": 200,
                                "_postman_previewlanguage": "json",
                                "header": [
                                    {
                                        "key": "X-Powered-By",
                                        "value": "Express"
                                    },
                                    {
                                        "key": "Access-Control-Allow-Origin",
                                        "value": "*"
                                    },
                                    {
                                        "key": "Content-Type",
                                        "value": "application/json; charset=utf-8"
                                    },
                                    {
                                        "key": "Content-Length",
                                        "value": "519"
                                    },
                                    {
                                        "key": "ETag",
                                        "value": "W/\"207-DRujn24CmqcNCqneLLc6KcV4ZpU\""
                                    },
                                    {
                                        "key": "Date",
                                        "value": "Fri, 15 Nov 2024 12:09:05 GMT"
                                    },
                                    {
                                        "key": "Connection",
                                        "value": "keep-alive"
                                    },
                                    {
                                        "key": "Keep-Alive",
                                        "value": "timeout=5"
                                    }
                                ],
                                "cookie": [],
                                "body": "{\n    \"car\": {\n        \"_id\": \"673735cc1e0126fe3735fbcd\",\n        \"tittle\": \" Car100\",\n        \"description\": \" A high-performance sports car for the adrenaline junkies.\",\n        \"images\": [\n            \"https://res.cloudinary.com/dkfgcfqn2/image/upload/v1731672543/Dynamic%20folders/lopis9m4bnyyspncedc7.jpg\",\n            \"https://res.cloudinary.com/dkfgcfqn2/image/upload/v1731672544/Dynamic%20folders/jnrz6wcrve1c5yw3g4x8.jpg\"\n        ],\n        \"car_type\": \" Updated Sports Car\",\n        \"company\": \" Porsche\",\n        \"dealer\": \" SpeedX Autos\",\n        \"color\": \" Red\",\n        \"price_range\": \" High\",\n        \"user\": \"673734741e0126fe3735fbc8\",\n        \"__v\": 0\n    }\n}"
                            },
                            {
                                "name": "Updating the Car",
                                "originalRequest": {
                                    "method": "PUT",
                                    "header": [],
                                    "body": {
                                        "mode": "formdata",
                                        "formdata": [
                                            {
                                                "key": "tittle",
                                                "value": " Car100",
                                                "type": "text"
                                            },
                                            {
                                                "key": "description",
                                                "value": " A high-performance sports car for the adrenaline junkies.",
                                                "type": "text"
                                            },
                                            {
                                                "key": "car_type",
                                                "value": " Updated Sports Car",
                                                "type": "text"
                                            },
                                            {
                                                "key": "company",
                                                "value": " Porsche",
                                                "type": "text"
                                            },
                                            {
                                                "key": "dealer",
                                                "value": " SpeedX Autos",
                                                "type": "text"
                                            },
                                            {
                                                "key": "color",
                                                "value": " Red",
                                                "type": "text"
                                            },
                                            {
                                                "key": "price_range",
                                                "value": " High",
                                                "type": "text"
                                            },
                                            {
                                                "key": "images",
                                                "type": "file",
                                                "src": "postman-cloud:///1efa3497-2a85-47f0-88cf-2af688af2ea8"
                                            },
                                            {
                                                "key": "images",
                                                "type": "file",
                                                "src": "postman-cloud:///1efa2d88-e78e-4ce0-a373-13e0e896b064"
                                            }
                                        ]
                                    },
                                    "url": {
                                        "raw": "http://localhost:5000/api/car/updateCar/673735cc1e0126fe3735fbcd",
                                        "protocol": "http",
                                        "host": [
                                            "localhost"
                                        ],
                                        "port": "5000",
                                        "path": [
                                            "api",
                                            "car",
                                            "updateCar",
                                            "673735cc1e0126fe3735fbcd"
                                        ]
                                    }
                                },
                                "status": "OK",
                                "code": 200,
                                "_postman_previewlanguage": "json",
                                "header": [
                                    {
                                        "key": "X-Powered-By",
                                        "value": "Express"
                                    },
                                    {
                                        "key": "Access-Control-Allow-Origin",
                                        "value": "*"
                                    },
                                    {
                                        "key": "Content-Type",
                                        "value": "application/json; charset=utf-8"
                                    },
                                    {
                                        "key": "Content-Length",
                                        "value": "519"
                                    },
                                    {
                                        "key": "ETag",
                                        "value": "W/\"207-DRujn24CmqcNCqneLLc6KcV4ZpU\""
                                    },
                                    {
                                        "key": "Date",
                                        "value": "Fri, 15 Nov 2024 12:09:05 GMT"
                                    },
                                    {
                                        "key": "Connection",
                                        "value": "keep-alive"
                                    },
                                    {
                                        "key": "Keep-Alive",
                                        "value": "timeout=5"
                                    }
                                ],
                                "cookie": [],
                                "body": "{\n    \"car\": {\n        \"_id\": \"673735cc1e0126fe3735fbcd\",\n        \"tittle\": \" Car100\",\n        \"description\": \" A high-performance sports car for the adrenaline junkies.\",\n        \"images\": [\n            \"https://res.cloudinary.com/dkfgcfqn2/image/upload/v1731672543/Dynamic%20folders/lopis9m4bnyyspncedc7.jpg\",\n            \"https://res.cloudinary.com/dkfgcfqn2/image/upload/v1731672544/Dynamic%20folders/jnrz6wcrve1c5yw3g4x8.jpg\"\n        ],\n        \"car_type\": \" Updated Sports Car\",\n        \"company\": \" Porsche\",\n        \"dealer\": \" SpeedX Autos\",\n        \"color\": \" Red\",\n        \"price_range\": \" High\",\n        \"user\": \"673734741e0126fe3735fbc8\",\n        \"__v\": 0\n    }\n}"
                            }
                        ]
                    },
                    {
                        "name": "MyCars",
                        "request": {
                            "auth": {
                                "type": "bearer",
                                "bearer": [
                                    {
                                        "key": "token",
                                        "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzM3MzQ3NDFlMDEyNmZlMzczNWZiYzgiLCJlbWFpbCI6ImFudUBnbWFpbC5jb20iLCJpYXQiOjE3MzE2NzEyNzgsImV4cCI6MTczMTY3NDg3OH0.DAuh2FMjZ3ukKXS6szOGLue1RNxSCk_jiIi_AuCPFPg",
                                        "type": "string"
                                    }
                                ]
                            },
                            "method": "GET",
                            "header": [],
                            "url": {
                                "raw": "http://localhost:5000/api/car/myCars",
                                "protocol": "http",
                                "host": [
                                    "localhost"
                                ],
                                "port": "5000",
                                "path": [
                                    "api",
                                    "car",
                                    "myCars"
                                ]
                            },
                            "description": "This APi will get me the objects of cars posted by me "
                        },
                        "response": [
                            {
                                "name": "MyCar",
                                "originalRequest": {
                                    "method": "GET",
                                    "header": [],
                                    "url": {
                                        "raw": "http://localhost:5000/api/car/myCars",
                                        "protocol": "http",
                                        "host": [
                                            "localhost"
                                        ],
                                        "port": "5000",
                                        "path": [
                                            "api",
                                            "car",
                                            "myCars"
                                        ]
                                    }
                                },
                                "status": "OK",
                                "code": 200,
                                "_postman_previewlanguage": "json",
                                "header": [
                                    {
                                        "key": "X-Powered-By",
                                        "value": "Express"
                                    },
                                    {
                                        "key": "Access-Control-Allow-Origin",
                                        "value": "*"
                                    },
                                    {
                                        "key": "Content-Type",
                                        "value": "application/json; charset=utf-8"
                                    },
                                    {
                                        "key": "Content-Length",
                                        "value": "513"
                                    },
                                    {
                                        "key": "ETag",
                                        "value": "W/\"201-6Sjhi4/wZtrWd402m0evBpw3US8\""
                                    },
                                    {
                                        "key": "Date",
                                        "value": "Fri, 15 Nov 2024 12:11:43 GMT"
                                    },
                                    {
                                        "key": "Connection",
                                        "value": "keep-alive"
                                    },
                                    {
                                        "key": "Keep-Alive",
                                        "value": "timeout=5"
                                    }
                                ],
                                "cookie": [],
                                "body": "[\n    {\n        \"_id\": \"673735cc1e0126fe3735fbcd\",\n        \"tittle\": \" Car100\",\n        \"description\": \" A high-performance sports car for the adrenaline junkies.\",\n        \"images\": [\n            \"https://res.cloudinary.com/dkfgcfqn2/image/upload/v1731672543/Dynamic%20folders/lopis9m4bnyyspncedc7.jpg\",\n            \"https://res.cloudinary.com/dkfgcfqn2/image/upload/v1731672544/Dynamic%20folders/jnrz6wcrve1c5yw3g4x8.jpg\"\n        ],\n        \"car_type\": \" Updated Sports Car\",\n        \"company\": \" Porsche\",\n        \"dealer\": \" SpeedX Autos\",\n        \"color\": \" Red\",\n        \"price_range\": \" High\",\n        \"user\": \"673734741e0126fe3735fbc8\",\n        \"__v\": 0\n    }\n]"
                            }
                        ]
                    },
                    {
                        "name": "Search using Query",
                        "request": {
                            "auth": {
                                "type": "bearer",
                                "bearer": [
                                    {
                                        "key": "token",
                                        "value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzM3MzQ3NDFlMDEyNmZlMzczNWZiYzgiLCJlbWFpbCI6ImFudUBnbWFpbC5jb20iLCJpYXQiOjE3MzE2NzEyNzgsImV4cCI6MTczMTY3NDg3OH0.DAuh2FMjZ3ukKXS6szOGLue1RNxSCk_jiIi_AuCPFPg",
                                        "type": "string"
                                    }
                                ]
                            },
                            "method": "GET",
                            "header": [],
                            "url": {
                                "raw": "http://localhost:5000/api/car/search?query=s",
                                "protocol": "http",
                                "host": [
                                    "localhost"
                                ],
                                "port": "5000",
                                "path": [
                                    "api",
                                    "car",
                                    "search"
                                ],
                                "query": [
                                    {
                                        "key": "query",
                                        "value": "s"
                                    }
                                ]
                            },
                            "description": "this api will give me the car object which are more relvant to searched queries"
                        },
                        "response": [
                            {
                                "name": "Search using Query",
                                "originalRequest": {
                                    "method": "GET",
                                    "header": [],
                                    "url": {
                                        "raw": "http://localhost:5000/api/car/search?query=s",
                                        "protocol": "http",
                                        "host": [
                                            "localhost"
                                        ],
                                        "port": "5000",
                                        "path": [
                                            "api",
                                            "car",
                                            "search"
                                        ],
                                        "query": [
                                            {
                                                "key": "query",
                                                "value": "s"
                                            }
                                        ]
                                    }
                                },
                                "status": "OK",
                                "code": 200,
                                "_postman_previewlanguage": "json",
                                "header": [
                                    {
                                        "key": "X-Powered-By",
                                        "value": "Express"
                                    },
                                    {
                                        "key": "Access-Control-Allow-Origin",
                                        "value": "*"
                                    },
                                    {
                                        "key": "Content-Type",
                                        "value": "application/json; charset=utf-8"
                                    },
                                    {
                                        "key": "Content-Length",
                                        "value": "3023"
                                    },
                                    {
                                        "key": "ETag",
                                        "value": "W/\"bcf-4/nooBGzSsvB0bN3yCZCegdM6WA\""
                                    },
                                    {
                                        "key": "Date",
                                        "value": "Fri, 15 Nov 2024 12:16:02 GMT"
                                    },
                                    {
                                        "key": "Connection",
                                        "value": "keep-alive"
                                    },
                                    {
                                        "key": "Keep-Alive",
                                        "value": "timeout=5"
                                    }
                                ],
                                "cookie": [],
                                "body": "[\n    {\n        \"_id\": \"67367c8361297d499b8eb770\",\n        \"tittle\": \" Car4\",\n        \"description\": \" A family sedan with spacious interiors and top-notch safety features.\",\n        \"images\": [\n            \"https://res.cloudinary.com/dkfgcfqn2/image/upload/v1731624065/Dynamic%20folders/s9so9y2oak53fsq29ic5.jpg\",\n            \"https://res.cloudinary.com/dkfgcfqn2/image/upload/v1731624067/Dynamic%20folders/xlxafts8n2vhhiquruly.jpg\"\n        ],\n        \"car_type\": \" Sedan\",\n        \"company\": \" Toyota\",\n        \"dealer\": \" Ganesh Motors\",\n        \"color\": \" Silver\",\n        \"price_range\": \" Medium\",\n        \"user\": \"6734f2e8df7df8b3c6e319c2\",\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"67367ca561297d499b8eb778\",\n        \"tittle\": \" Car6\",\n        \"description\": \" A stylish convertible ideal for sunny drives.\",\n        \"images\": [\n            \"https://res.cloudinary.com/dkfgcfqn2/image/upload/v1731624097/Dynamic%20folders/zm96zln3tapfpud4f8z7.jpg\",\n            \"https://res.cloudinary.com/dkfgcfqn2/image/upload/v1731624099/Dynamic%20folders/hv30sw5o8ud8qsdnm6j1.jpg\"\n        ],\n        \"car_type\": \" Convertible\",\n        \"company\": \" Mercedes-Benz\",\n        \"dealer\": \" Elite Cars\",\n        \"color\": \" Yellow\",\n        \"price_range\": \" High\",\n        \"user\": \"6734f2e8df7df8b3c6e319c2\",\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"67367cd761297d499b8eb77c\",\n        \"tittle\": \" Car7\",\n        \"description\": \" A rugged pickup truck built for heavy-duty tasks.\",\n        \"images\": [\n            \"https://res.cloudinary.com/dkfgcfqn2/image/upload/v1731624148/Dynamic%20folders/ynmds3bi0vhwixwtfpr2.jpg\",\n            \"https://res.cloudinary.com/dkfgcfqn2/image/upload/v1731624151/Dynamic%20folders/g7fbddcvlxdyh19wovge.jpg\"\n        ],\n        \"car_type\": \" Pickup Truck\",\n        \"company\": \" Ford\",\n        \"dealer\": \" Central Motors\",\n        \"color\": \" Green\",\n        \"price_range\": \" Affordable\",\n        \"user\": \"6734f2e8df7df8b3c6e319c2\",\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"67367d1461297d499b8eb781\",\n        \"tittle\": \" Car8\",\n        \"description\": \" A spacious and efficient wagon for family trips.\",\n        \"images\": [\n            \"https://res.cloudinary.com/dkfgcfqn2/image/upload/v1731624210/Dynamic%20folders/ubsiescw29ujukedxua0.jpg\",\n            \"https://res.cloudinary.com/dkfgcfqn2/image/upload/v1731624212/Dynamic%20folders/t4amkpxtzyzf1oy2xaqo.jpg\"\n        ],\n        \"car_type\": \" Wagon\",\n        \"company\": \" Suzuki\",\n        \"dealer\": \" Raj Auto Sales\",\n        \"color\": \" Grey\",\n        \"price_range\": \" Medium\",\n        \"user\": \"673626690926d682d54bfa61\",\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"67367d6c61297d499b8eb78a\",\n        \"tittle\": \" Car10\",\n        \"description\": \" A high-performance sports car for the adrenaline junkies.\",\n        \"images\": [\n            \"https://res.cloudinary.com/dkfgcfqn2/image/upload/v1731624298/Dynamic%20folders/nfywma5u7lh5ciwkcvcz.jpg\",\n            \"https://res.cloudinary.com/dkfgcfqn2/image/upload/v1731624300/Dynamic%20folders/cogi4wjg6jipbgmjlcan.jpg\"\n        ],\n        \"car_type\": \" Sports Car\",\n        \"company\": \" Porsche\",\n        \"dealer\": \" SpeedX Autos\",\n        \"color\": \" Red\",\n        \"price_range\": \" High\",\n        \"user\": \"673626690926d682d54bfa61\",\n        \"__v\": 0\n    },\n    {\n        \"_id\": \"673735cc1e0126fe3735fbcd\",\n        \"tittle\": \" Car100\",\n        \"description\": \" A high-performance sports car for the adrenaline junkies.\",\n        \"images\": [\n            \"https://res.cloudinary.com/dkfgcfqn2/image/upload/v1731672543/Dynamic%20folders/lopis9m4bnyyspncedc7.jpg\",\n            \"https://res.cloudinary.com/dkfgcfqn2/image/upload/v1731672544/Dynamic%20folders/jnrz6wcrve1c5yw3g4x8.jpg\"\n        ],\n        \"car_type\": \" Updated Sports Car\",\n        \"company\": \" Porsche\",\n        \"dealer\": \" SpeedX Autos\",\n        \"color\": \" Red\",\n        \"price_range\": \" High\",\n        \"user\": \"673734741e0126fe3735fbc8\",\n        \"__v\": 0\n    }\n]"
                            }
                        ]
                    }
                ],
                "description": "The `/collections` endpoints let you manage your [collections](https://learning.postman.com/docs/sending-requests/intro-to-collections/)."
            }
        ],
        "auth": {
            "type": "apikey",
            "apikey": [
                {
                    "key": "key",
                    "value": "X-API-Key",
                    "type": "string"
                },
                {
                    "key": "value",
                    "value": "{{token}}",
                    "type": "string"
                }
            ]
        },
        "event": [
            {
                "listen": "prerequest",
                "script": {
                    "type": "text/javascript",
                    "exec": [
                        ""
                    ]
                }
            },
            {
                "listen": "test",
                "script": {
                    "type": "text/javascript",
                    "exec": [
                        ""
                    ]
                }
            }
        ],
        "variable": [
            {
                "key": "baseUrl",
                "value": "https://farming-simulator.pstmn.io"
            }
        ]
    }
    return res.status(200).json(data);
}
    module.exports=addCar;