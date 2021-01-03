const spawn = require("child_process").spawn;
const pythonProcess = spawn('python3',["./scripts/SendEmail.py", "./data/contacts.txt", "./templates/Reminder.txt"]);
