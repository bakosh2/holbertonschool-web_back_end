const http = require('http');
const fs = require('fs').promises;

/**
 * Helper function to process student data and return it as a string.
 * This mimics the logic from 3-read_file_async.js but returns the output.
 */
async function countStudents(path) {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim().length > 0);
    lines.shift(); // Remove header

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

const app = http.createServer(async (req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.end('Hello Holberton School!');
  } else if (req.url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const studentData = await countStudents(process.argv[2]);
      res.end(studentData);
    } catch (error) {
      res.end(error.message);
    }
  } else {
    res.end();
  }
});

app.listen(1245);

module.exports = app;
