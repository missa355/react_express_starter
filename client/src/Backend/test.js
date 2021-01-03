const spawn = require("child_process").spawn;
const pythonprocess = spawn("python3", ["~/Development_test/scripts/SendEmail.py", "~/Development_test/data/contacts.txt", "~/Development_test/templates/Reminder.txt"])
