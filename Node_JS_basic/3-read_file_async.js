const fs = require('fs').promises;

/**
 * Counts students from a CSV file asynchronously.
 * @param {string} path - The path to the CSV database.
 * @returns {Promise}
 */
function countStudents(path) {
  return fs.readFile(path, 'utf8')
    .then((content) => {
      // Split content by new lines and filter out empty lines
      const lines = content.split('\n').filter((line) => line.trim().length > 0);

      // Remove the header row
      const header = lines.shift();
      if (!header) return;

      const studentsByField = {};
      let totalStudents = 0;

      for (const line of lines) {
        const studentData = line.split(',');
        // Ensure the line has enough data points to be valid
        if (studentData.length >= 4) {
          totalStudents += 1;
          const firstName = studentData[0];
          const field = studentData[3].trim();

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
    })
    .catch(() => {
      // Reject with the specific error message required
      throw new Error('Cannot load the database');
    });
}

module.exports = countStudents;
