// https://www.hackerrank.com/challenges/grading/problem

function gradingStudents(grades) {
  return grades.map((g) => {
    const round = Math.ceil((g + 1) / 5) * 5;
    console.log(round);
    return round - g < 3 && g >= 38 ? round : g;
  });
}

console.log(gradingStudents([73, 67, 38, 33]));
