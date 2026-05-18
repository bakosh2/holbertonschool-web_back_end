import fs from 'fs';

const readDatabase = (path) => new Promise((resolve, reject) => {
  fs.readFile(path, 'utf8', (err, data) => {
    if (err) {
      reject(err);
      return;
    }
    const lines = data.split('\n').filter((line) => line.trim().length > 0);
    const studentsByField = {};

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

export default readDatabase;
