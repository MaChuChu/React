# JSON Server

Installing JSON Server
```BASH
npx json-server -p 3500 -w data/db.json
```
Viewing db.json 
```bash
http://localhost:3500/items
```
```json
[
  {
    "id": 1,
    "checked": false,
    "item": "Almonds"
  },
  {
    "id": 2,
    "checked": false,
    "item": "Pizza"
  },
  {
    "id": 3,
    "checked": false,
    "item": "Bread"
  }
]
```