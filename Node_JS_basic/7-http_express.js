const express = require('express');
const fs = require('fs').promises;

const app = express();
const PORT = 1245;

/**
 * Processes student data from a CSV file and returns a formatted string.
 */
async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim().length > 0);
    lines.shift(); // Remove CSV header

    const fields = {};
    let totalStudents = 0;

    for (const line of lines) {
      const student = line.split(',');
      if (student.length >= 4) {
        totalStudents += 1;
        const field = student[3].trim();
        const firstName = student[0].trim();
        if (!fields[field]) fields[field] = [];
        fields[field].push(firstName);
      }
    }

    let output = `Number of students: ${totalStudents}`;
    for (const [field, names] of Object.entries(fields)) {
      output += `\nNumber of students in ${field}: ${names.length}. List: ${names.join(', ')}`;
    }
    return output;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

// Route for the root path
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Route for the students path
app.get('/students', async (req, res) => {
  const intro = 'This is the list of our students\n';
  try {
    const studentData = await countStudents(process.argv[2]);
    res.send(`${intro}${studentData}`);
  } catch (error) {
    res.send(`${intro}${error.message}`);
  }
});

// Start listening
app.listen(PORT);

// Export the app
module.exports = app;
