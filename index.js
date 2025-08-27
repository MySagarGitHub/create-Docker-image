const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      employeename: 'John Doe'
    },
    {
      id: 8,
      employeename: 'will Smith'
    },
    {
      id: 4,
      employeename: 'Dakota Johnson'
    },
    {
      id: 5,
      employeename: 'Chris Evans' 
    },
    {
      id: 6,
      employeename: 'Scarlett Johansson'
    }
  ]);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
