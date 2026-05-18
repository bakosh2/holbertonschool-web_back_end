import fs from 'fs';

export const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    const lines = data.split('\n').filter((line) => line.trim().length > 0);
    const studentsByField = {};

    // Skip header and process lines
    lines.slice(1).forEach((line) => {
      const [firstname, , , field] = line.split(',');
      if (firstname && field) {
        if (!studentsByField[field]) studentsByField[field] = [];
        studentsByField[field].push(firstname);
      }
    });
    resolve(studentsByField);
  });
});
