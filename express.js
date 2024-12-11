const express = require('express');
const app = express();

// Обработчик для корневого пути
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Настройка порта
const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});