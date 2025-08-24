const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      employeename: 'John Doe'
    },
    {
      id: 2,
      employeename: 'Jane Smith'
    } 
  ]);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
