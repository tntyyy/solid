// Не правильно:

class Database {
  connect() {}
  read() {}
  write() {}

  joinTable() {}
}

class MySqlDatabase extends Database {
  // тут метод joinTable уместен, потому что MySQL - реляционная бд
}

class MongoDatabase extends Database {
  joinTable() {
    throw new Error('В MongoDB нет таблиц!');
  }
}

// Решение:

class Database {
  connect() {}
  read() {}
  write() {}
}

class MySqlDatabase extends Database {
  joinTable() {}
}

class MongoDatabase extends Database {
  // тут все ок, потому что метода joinTable нет в родительском классе
}