export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => {
      // Find the grade object for the current student
      const gradeObj = newGrades.filter((grade) => grade.studentId === student.id)[0];

      return {
        ...student,
        // If gradeObj exists, use its grade; otherwise, use 'N/A'
        grade: gradeObj ? gradeObj.grade : 'N/A',
      };
    });
}
