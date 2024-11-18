CREATE TABLE IF NOT EXISTS users (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  username TEXT,
  password TEXT,
  email TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  role TEXT DEFAULT 'user'
);

INSERT INTO users (username, password, email, role) VALUES
  ('admin', 'sfkd@dsd1', 'ceo@company.com', 'admin'),
  ('user1', '123', 'user1@aaa.com', 'user');

INSERT INTO users (username, password, email) VALUES
  ('user2', 'password2', 'user2@kakao.com'),
  ('user3', 'password3', 'user3@daum.net');
