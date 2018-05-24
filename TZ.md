Необходимо реализовать следующий функционал на основе этого репозитория:

- Получить и вывести список пользователей
- Получить список todo для конкретного пользователя
- Менять свойство completed у todo
- Настроить роутинг для todo

Примерные роуты

/users

/users/:id

В данном проекте есть json-server с простой базой данных.

Основные 2 эндпоинта это 
http://localhost:3030/users
```
[
  {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "Gwenborough",
      "zipcode": "92998-3874",
      "geo": {
        "lat": "-37.3159",
        "lng": "81.1496"
      }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
      "name": "Romaguera-Crona",
      "catchPhrase": "Multi-layered client-server neural-net",
      "bs": "harness real-time e-markets"
    }
  }
]
```

http://localhost:3030/todos?userId=:userIdFromUrl
```
[
  {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  }
]
```

Для обновления можно использовать метод PATCH
http://localhost:3030/todos/:taskId
с контентом 
```
{"completed": true/false}
```

Все доступные фильтры можно посмотреть в документации json-server

https://github.com/typicode/json-server#filter

Так же можно реализовать пагинацию

https://github.com/typicode/json-server#paginate
