const fs = require('fs');

/**
 * Counts students from a CSV file synchronously.
 * @param {string} path - The path to the CSV database.
 */
function countStudents(path) {
  let content;

  try {
    // Read file synchronously with utf-8 encoding
    content = fs.readFileSync(path, 'utf8');
  } catch (err) {
    throw new Error('Cannot load the database');
  }

  // Split content by new lines and filter out empty lines
  const lines = content.split('\n').filter((line) => line.trim().length > 0);

  // Remove the header row (firstname, lastname, age, field)
  const header = lines.shift();
  if (!header) return;

  const studentsByField = {};
  let totalStudents = 0;

  for (const line of lines) {
    const studentData = line.split(',');
    if (studentData.length >= 4) {
      totalStudents += 1;
      const firstName = studentData[0];
      const field = studentData[3];

      if (!studentsByField[field]) {
        studentsByField[field] = [];
      }
      studentsByField[field].push(firstName);
    }
  }

  console.log(`Number of students: ${totalStudents}`);

  for (const [field, names] of Object.entries(studentsByField)) {
    console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
  }
}

module.exports = countStudents;
