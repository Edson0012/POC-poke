## About
A simple CRUD pokémon creation site page that I created while learning typescript.

___
## Routes
All routes are prefixed with **/poke**, so a **GET /** route described below means **GET /poke**, and a **GET /:id** route means **GET /poke /:id** and so on.

___
### **GET/**
Returns all bank items by pokemon weight in descending order.

**Example:**

```json
[
  {
    "name": "empoleon",
    "weight": 98,
    "type": "água"
  },
  {
    "name": "blastoise",
    "weight": 92,
    "type": "água"
  },
  {
    "name": "blaziken",
    "weight": 80,
    "type": "fogo"
  },
  {
    "name": "marshtomp",
    "weight": 40,
    "type": "água"
  },
  {
    "name": "squirtle",
    "weight": 20,
    "type": "água"
  }
]
```
___
### **GET /type**
Return existing types to choose and create your pokémon

**Example:**
```json
[
  {
    "id": 1,
    "name": "fogo"
  },
  {
    "id": 2,
    "name": "água"
  },
  {
    "id": 3,
    "name": "grama"
  }
]
```
___
### **POST /**
Return pokémon created

**Body:**
```json
{
  "name": "mantyke",
  "typeId": 2,
  "weight": 12
}
```
___
### **DELETE /:id**
Remove item from database by Id

___
### **PUT /:id**
Find a pokémon by id and edit/update it by sending a body in the format.

Return OK

**Body**
```json 
{
  "name": "horsea",
  "typeId": 2,
  "weight": 8
}
```