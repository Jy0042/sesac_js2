CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT,
  password TEXT
);

INSERT INTO users (username, password) VALUES
  ('admin', 'sfkd@dsd1'),
  ('user1', 'password1'),
  ('user2', 'password2'),
  ('user3', 'password3');
