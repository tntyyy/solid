// BEFORE =====================================

const generateId = () => Date.now();

class User {
  id: number;
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.id = generateId();
    this.username = username;
    this.password = password;
  }

  saveToDatabase() {
    // куда то сохраняет себя
  }

  log() {
    console.log('Вывести пользователя');
  }

  send() {
    // что то отправляет
  }
}

// AFTER =====================================

class User {
  id: number;
  username: string;
  password: string;

  constructor(username: string, password: string) {
    this.id = generateId();
    this.username = username;
    this.password = password;
  }
}

class UserRepository {
  save(user: User) {
    // сохраняет в бд
  }
}

class UserLogger {
  log(user: User) {
    // логирует
  }
}

class UserController {
  send(user: User) {
    // что то отправляет
  }
}

// ИТОГ: 
// 1) Появились модули -> читабельность выросла.
// 2) Вносить изменения стало проще.
// 3) Избавились от антипаттерна GodObject.
// 4) Каждая сущность инкапсулирует решение одной задачи.