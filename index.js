const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      employeename: 'John Doe'
    },
    {
      id: 3,
      employeename: 'will Smith'
    },
    {
      id: 4,
      employeename: 'Dakota Johnson'
    },
    {
      id: 5,
      employeename: 'Chris Evans'
    }
  ]);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
