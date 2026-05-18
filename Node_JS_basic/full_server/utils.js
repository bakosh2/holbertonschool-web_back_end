import fs from 'fs';

export const readDatabase = (filePath) => new Promise((resolve, reject) => {
  if (!filePath) {
    reject(new Error('Cannot load the database'));
    return;
  }
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(new Error('Cannot load the database'));
      return;
    }
    const studentsByField = {};
    const lines = data.trim().split('\n');

    lines.slice(1).forEach((line) => {
      const parts = line.trim().split(',');
      if (parts.length >= 4) {
        const firstname = parts[0].trim();
        const field = parts[3].trim();
        if (firstname && field) {
          if (!studentsByField[field]) studentsByField[field] = [];
          studentsByField[field].push(firstname);
        }
      }
    });
    resolve(studentsByField);
  });
});
