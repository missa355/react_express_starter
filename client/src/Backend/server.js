const express = require('express');

const app = express();

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Kerrick', lastName: 'Traversy'},
    {id: 3, firstName: 'Mohamed', lastName: 'Issa'},
  ];

  res.json(customers);
});

app.post('/api/SendEmail', (req, res) => {
  console.log("Trst")
  const spawn = require("child_process").spawn;
  const pythonprocess = spawn('python3',["./scripts/SendEmail.py", "./data/contacts.txt", "./templates/Reminder.txt"])

  res.json({data:"Hey"});
});

const port = 5000;

app.listen(port, () => `Server running on port ${port}`);
